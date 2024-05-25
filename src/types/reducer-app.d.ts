import { Dispatch } from 'react';
import Customer from '@src/models/Customer.class';

export type CustomerCRUD = {
  customers: Customer[];
  currentCustomer: Customer;
};

export type ScreenLoading = {
  isLoading: boolean;
};

export type StateApp = {
  screenLoading: boolean;
  customersCrud: CustomerCRUD;
};

export type ActionApp = {
  type:
    | 'set_customers_list'
    | 'clear_customers_list'
    | 'add_customer'
    | 'update_customer'
    | 'delete_customer'
    | 'set_current_customer'
    | 'clear_current_customer'
    | 'start_loading'
    | 'finish_loading';
  /* For delete */
  customerId?: number;
  /* For add */
  newCustomer?: Customer;
  newCustomers?: Customer[];
};

export type ReducerApp = {
  state: StateApp;
  dispatch: Dispatch<ActionApp>;
};
