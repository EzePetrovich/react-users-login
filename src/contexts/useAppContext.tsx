import { ReducerApp } from '@src/types/reducer-app';
import { createContext, useContext } from 'react';

export const AppContext = createContext<ReducerApp | null>(null);
export function useAppContext() {
  const appState = useContext(AppContext);

  if (!appState)
    throw new Error('useAppContext must be used with a AppContext.');

  return appState;
}
