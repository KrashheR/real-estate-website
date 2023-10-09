import GlobalStyles from './assets/theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './assets/theme/defaultTheme';
import MainPage from './pages/mainPage/mainPage';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={DefaultTheme}>
          <GlobalStyles />
          <MainPage />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
