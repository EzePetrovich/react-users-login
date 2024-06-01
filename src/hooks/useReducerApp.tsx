import { useReducer } from 'react';
import { ActionApp, StateApp } from '@src/types/reducer-app';

function reducer(state: StateApp, action: ActionApp) {
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
};

export const useReducerApp = () => {
  const [state, dispatch] = useReducer(reducer, initialAppState);
  return { state, dispatch };
};
