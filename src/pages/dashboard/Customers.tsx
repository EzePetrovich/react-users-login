import React from 'react';
import axios from 'axios';
import { TableCustomers } from '@src/components/customer/TableCustomers';
import Api from '@src/constants/api.constants';
import { useAppContext } from '@src/contexts/useAppContext';
import { Paper } from '@mui/material';

export const Customers = () => {
  const reducerApp = useAppContext();

  async function getCustomers() {
    const response = await axios.get(Api.customer.endpoints.list!);
    if (response?.status == 200) {
      reducerApp.dispatch({
        actionCustomers: {
          type: 'set_customers_list',
          newCustomers: response.data,
        },
      });
    }
  }

  React.useEffect(() => {
    reducerApp.dispatch({ actionScreenLoading: { type: 'start_loading' } });
    getCustomers();
    setTimeout(() => {
      reducerApp.dispatch({ actionScreenLoading: { type: 'finish_loading' } });
    }, 1000);
  }, []);

  return (
    <Paper sx={{ width: '90%' }} elevation={4}>
      <TableCustomers
        customers={reducerApp.state.customersCrud.customers || []}
      />
    </Paper>
  );
};
export default Customers;
