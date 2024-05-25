import '@src/styles/App.css';
import { ThemeProvider } from '@emotion/react';
import {
  Backdrop,
  CircularProgress,
  CssBaseline,
  createTheme,
} from '@mui/material';
import { AppContext } from '@src/contexts/useAppContext';
import Customers from '@src/pages/dashboard/Customers';
import { useReducerApp } from '@src/hooks/useReducerApp';

function App() {
  const reducerApp = useReducerApp();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <AppContext.Provider value={reducerApp}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Customers />
      </ThemeProvider>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={reducerApp.state.screenLoading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </AppContext.Provider>
  );
}

export default App;
