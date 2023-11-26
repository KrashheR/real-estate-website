import GlobalStyles from './assets/theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './assets/theme/defaultTheme';
import MainPage from './pages/mainPage/mainPage';
import ErrorBoundary from './utils/errorBoundary/errorBoundary';
import { useAppDispatch } from './hooks/redux';
import { useEffect } from 'react';
import { fetchBuildings, fetchPromos } from './store/reducers/ActionCreators';
import { Routes, Route } from "react-router-dom";
import BuildingsPage from './pages/buildingsPage/buildingsPage' ;
import MainLayout from './components/layouts/mainLayout/mainLayout';
import About from './pages/aboutPage/aboutPage';
import NewsPage from './pages/newsPage/newsPage';
import NewsArticle from './pages/newsArticle/newsArticle';
import ConstructorPage from './pages/constructorPage/constructorPage';
import ApartmentPage from './pages/apartmentPage/apartmentPage';

function App() {
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(fetchBuildings());
    dispatch(fetchPromos());
  }, [])

  return (
    <ErrorBoundary>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index path='/' element={<MainPage />}/>
            <Route path='buildings' element={<BuildingsPage />}/>
            <Route path='buildings/:id/' element={<ApartmentPage />}/>
            <Route path='about' element={<About />}/>
            <Route path='news' element={<NewsPage />}/>
            <Route path='news/:id/' element={<NewsArticle/>}/>
            <Route path='constructor/' element={<ConstructorPage/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
