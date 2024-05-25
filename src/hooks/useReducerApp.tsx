import { useReducer } from 'react';
import { ActionApp, StateApp } from '@src/types/reducer-app';
import Customer from '@src/models/Customer.class';

function reducer(state: StateApp, action: ActionApp) {
  if (action.type == 'set_customers_list') {
    const { newCustomers } = action;
    const emptyOrNullCustomers = !newCustomers || newCustomers.length == 0;
    if (emptyOrNullCustomers)
      throw new Error("Customers to set can't be null or empty.");
    const newCustomersCrud = {
      ...state.customersCrud,
      customers: newCustomers,
    };
    return { ...state, customersCrud: newCustomersCrud };
  }

  if (action.type == 'clear_customers_list') {
    const newCustomersCrud = {
      ...state.customersCrud,
      customers: [],
    };
    return { ...state, customersCrud: newCustomersCrud };
  }

  if (action.type == 'start_loading') {
    return { ...state, screenLoading: true };
  }

  if (action.type == 'finish_loading') {
    return { ...state, screenLoading: false };
  }

  throw new Error(`Unknown action type in app reducer: ${action.type}`);
}

const initialAppState: StateApp = {
  screenLoading: false,
  customersCrud: { customers: [], currentCustomer: new Customer() },
};

export const useReducerApp = () => {
  const [state, dispatch] = useReducer(reducer, initialAppState);
  return { state, dispatch };
};
