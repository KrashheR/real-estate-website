import {
  StyledCountdownOfferCard,
  StyledCountdownOfferCardContainer,
  StyledCountdownOfferCardText,
  StyledCountdownOfferButton,
  StyledCountdownOfferTimer,
  StyledCountdownOfferDescriptionContainer,
} from './styled';
import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../ui/title/title';
import Description, {
  DescriptionSize,
} from '../../../ui/description/description';
import { Link } from 'react-router-dom';

interface CountodwnOfferCardProps {
  toDate: string;
  link: string;
}

function CountdownOfferCard({ toDate, link }: CountodwnOfferCardProps) {
  return (
    <StyledCountdownOfferCard as={Link} to={link}>
      <Title
        level={TitleLevel.H2}
        size={TitleSize.M}
        weight={TitleWeight.SEMIBOLD}
      >
        Первоначальный взнос всего 15% вместо 20%!
      </Title>
      <StyledCountdownOfferDescriptionContainer>
        <Description size={DescriptionSize.XS}>
          Только в этом месяце! Не упусти уникальную возможность стать
          собственником нового жилья в лучших ЖК города! Ипотека со сниженным
          первоначальным взносом ждёт именно тебя!
        </Description>
      </StyledCountdownOfferDescriptionContainer>
      <StyledCountdownOfferCardContainer>
        <StyledCountdownOfferCardText>
          До окончания предложения:
        </StyledCountdownOfferCardText>
        <StyledCountdownOfferTimer endDate={new Date(toDate)} />
        <StyledCountdownOfferButton>Подробнее</StyledCountdownOfferButton>
      </StyledCountdownOfferCardContainer>
    </StyledCountdownOfferCard>
  );
}

export default CountdownOfferCard;
