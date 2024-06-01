import '@src/styles/app.styles.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { AppContext } from '@src/contexts/useAppContext';
import { useReducerApp } from '@src/hooks/useReducerApp';
import { ScreenSpinner } from '@src/components/global/ScreenSpinner';
import { SignIn } from '@src/pages/SignIn';
import { SignUp } from '@src/pages/SignUp';

function App() {
  const reducerApp = useReducerApp();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <></>,
    },
    {
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
  ]);

  return (
    <AppContext.Provider value={reducerApp}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
      <ScreenSpinner open={reducerApp.state.screenLoading} />
    </AppContext.Provider>
  );
}

export default App;
