import { useEffect } from 'react';
import Title, { TitleLevel, TitleType } from '../../components/ui/title/title';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchNews } from '../../store/reducers/ActionCreators';
import {
  selectNews,
  selectNewsCount,
  selectNewsLoading,
} from '../../store/reducers/Selectors';
import NewsList from './newsList/newsList';
import { StyledNewsPage, StyledNewsButton } from './styled';
import LoadMoreButton from '../../components/ui/loadMoreButton/loadMoreButton';

function NewsPage() {
  const dispatch = useAppDispatch();
  const news = useAppSelector(selectNews);
  const count = useAppSelector(selectNewsCount);
  const isLoading = useAppSelector(selectNewsLoading);

  const loadMoreNews = () => {
    dispatch(fetchNews(count));
  };

  useEffect(() => {
    dispatch(fetchNews(count));
  }, [dispatch]);

  return (
    <StyledNewsPage>
      <Title level={TitleLevel.H1} type={TitleType.PAGETITLE}>
        Наши новости
      </Title>
      <NewsList news={news} />
      <StyledNewsButton>
      <LoadMoreButton isLoading={isLoading} onClick={loadMoreNews}/>
      </StyledNewsButton>

    </StyledNewsPage>
  );
}

export default NewsPage;
