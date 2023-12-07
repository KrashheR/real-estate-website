import {lazy, Suspense} from 'react';
import GlobalStyles from './assets/theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from './assets/theme/defaultTheme';
import MainPage from './pages/mainPage/mainPage';
import ErrorBoundary from './utils/errorBoundary/errorBoundary';
import { useAppDispatch } from './hooks/redux';
import { useEffect } from 'react';
import { fetchBuildings, fetchPromos } from './store/reducers/ActionCreators';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layouts/mainLayout/mainLayout';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import LoadingLayout from './components/layouts/loadingLayout/loadingLayout';

const BuildingsPage = lazy(
  () => import('./pages/buildingsPage/buildingsPage'),
);
const AboutPage = lazy(() => import('./pages/aboutPage/aboutPage'));
const ApartmentPage = lazy(
  () => import('./pages/apartmentPage/apartmentPage'),
);
const NewsPage = lazy(() => import('./pages/newsPage/newsPage'));
const NewsArticle = lazy(() => import('./pages/newsArticle/newsArticle'));
const ConstructorPage = lazy(
  () => import('./pages/constructorPage/constructorPage'),
);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBuildings());
    dispatch(fetchPromos());
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Suspense fallback={<LoadingLayout />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index path="/" element={<MainPage />} />
              <Route path="buildings" element={<BuildingsPage />} />
              <Route path="buildings/:id/" element={<ApartmentPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="news/:id/" element={<NewsArticle />} />
              <Route path="constructor/" element={<ConstructorPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
