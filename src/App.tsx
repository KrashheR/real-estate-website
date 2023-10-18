import GlobalStyles from './assets/theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './assets/theme/defaultTheme';
import MainPage from './pages/mainPage/mainPage';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import { useAppDispatch } from './hooks/redux';
import { useEffect } from 'react';
import { fetchCards } from './store/reducers/ActionCreators';
import { Routes, Route } from "react-router-dom";
import ProjectPage from './pages/apartments/apartments' ;
import MainLayout from './components/layouts/mainLayout/mainLayout';
import About from './pages/about/about';

function App() {
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(fetchCards());
  }, [])

  return (
    <ErrorBoundary>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index path='/' element={<MainPage />}/>
            <Route path='apartments/:id/' element={<ProjectPage />}/>
            <Route path='*' element={<About />}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
