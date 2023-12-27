import { Link } from 'react-router-dom';
import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../components/ui/title/title';
import { INews } from '../../../types/INews';
import {
  StyledCardDate,
  StyledNewsCard,
  StyledNewsCardImage,
  StyledNewsCardTextContainer,
} from './styled';

interface NewsCardProps {
  data: INews;
}

function NewsCard({ data }: NewsCardProps) {
  const link = `${window.location.origin}/news/${data.id}`;
  return (
    <StyledNewsCard as={Link} to={link}>
      <StyledNewsCardImage src={data.imageMobile} />
      <StyledNewsCardTextContainer>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.S}
          weight={TitleWeight.BOLD}
        >
          {data.title}
        </Title>
        <StyledCardDate>{data.date}</StyledCardDate>
      </StyledNewsCardTextContainer>
    </StyledNewsCard>
  );
}

export default NewsCard;
