import { Dispatch } from 'react';

export type ScreenLoading = {
  isLoading: boolean;
};

export type StateApp = {
  screenLoading: boolean;
};

export type ActionApp = {
  type: 'start_loading' | 'finish_loading';
};

export type ReducerApp = {
  state: StateApp;
  dispatch: Dispatch<ActionApp>;
};
