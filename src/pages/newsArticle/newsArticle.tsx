import { useParams } from 'react-router-dom';
import Description, {
  DescriptionType,
} from '../../components/ui/description/description';
import Title, { TitleLevel, TitleType } from '../../components/ui/title/title';
import { useAppSelector } from '../../hooks/redux';
import { selectNewsById } from '../../store/reducers/news/NewsSelectors';
import {
  StyledNewsArticle,
  StyledNewsContainer,
  StyledNewsImage,
  StyledNewsText,
} from './styled';

function NewsArticle() {
  const { id } = useParams<{ id: string }>();
  const data = useAppSelector((state) =>
    selectNewsById(state, parseInt(id as string)),
  );

  if (!data) {
    return <p>Новость не найдена</p>;
  }

  const newsDescription = data.description.split('<br>');

  return (
    <StyledNewsArticle>
      <StyledNewsContainer>
        <StyledNewsImage src={data.image} />
        <Title level={TitleLevel.H2} type={TitleType.NEWS}>
          {data.title}
        </Title>
        <StyledNewsText>
          {newsDescription.map((item, index) => {
            const key = `${index}-${item.substring(0, 5)}`;
            return (
              <Description type={DescriptionType.NEWS} key={key}>
                {item}
              </Description>
            );
          })}
        </StyledNewsText>
      </StyledNewsContainer>
    </StyledNewsArticle>
  );
}

export default NewsArticle;
