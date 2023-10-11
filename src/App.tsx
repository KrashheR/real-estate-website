import GlobalStyles from './assets/theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './assets/theme/defaultTheme';
import MainPage from './pages/mainPage/mainPage';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import { useAppDispatch } from './hooks/redux';
import { useEffect } from 'react';
import { fetchCards } from './store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(fetchCards());
  }, [])


  return (
    <ErrorBoundary>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <MainPage />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
