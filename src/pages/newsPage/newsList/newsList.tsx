import { StyledNewsList } from './styled';
import NewsCard from '../newsCard/newsCard';
import { INews } from '../../../types/INews';

function NewsList({ news }: { news: INews[] }) {
  return (
    <StyledNewsList>
      {news.map((item: INews) => (
        <NewsCard data={item} key={item.id} />
      ))}
    </StyledNewsList>
  );
}

export default NewsList;
