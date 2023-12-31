import { useParams } from 'react-router-dom';
import Description, {
  DescriptionSize,
} from '../../components/ui/description/description';
import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../components/ui/title/title';
import { useAppSelector } from '../../hooks/redux';
import { selectNewsById } from '../../store/reducers/news/newsSelectors';
import {
  StyledNewsArticle,
  StyledNewsContainer,
  StyledNewsImage,
  StyledNewsPicture,
  StyledNewsText,
} from './styled';
import MyRouteButton from '../../components/ui/myRouteButton/myRouteButton';

function NewsArticle() {
  const { id } = useParams<{ id: string }>();
  const data = useAppSelector((state) => selectNewsById(state, id as string));

  if (!data) {
    return <p>Новость не найдена</p>;
  }

  const newsDescription = data.description.split('<br>');

  return (
    <StyledNewsArticle>
      <StyledNewsContainer>
        <StyledNewsPicture>
          <source srcSet={data.imageMobile} media="(max-width: 576px)" />
          <StyledNewsImage src={data.image} />
        </StyledNewsPicture>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.L}
          weight={TitleWeight.BOLD}
        >
          {data.title}
        </Title>
        <StyledNewsText>
          {newsDescription.map((item, index) => {
            const key = `${index}-${item.substring(0, 5)}`;
            return (
              <Description size={DescriptionSize.S} key={key}>
                {item}
              </Description>
            );
          })}
        </StyledNewsText>
        <MyRouteButton link="/news/">Вернуться к списку новостей</MyRouteButton>
      </StyledNewsContainer>
    </StyledNewsArticle>
  );
}

export default NewsArticle;
