import GlobalStyles from './assets/theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './assets/theme/defaultTheme';
import MainPage from './pages/mainPage/mainPage';

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
