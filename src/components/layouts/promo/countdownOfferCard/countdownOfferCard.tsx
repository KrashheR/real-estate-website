import {
  StyledCountdownOfferCard,
  StyledCountdownOfferCardContainer,
  StyledCountdownOfferCardText,
} from './styled';
import Title, { TitleLevel, TitleType } from '../../../ui/title/title';
import ReadMoreButton from '../../../ui/readMoreButton/readMoreButton';
import CountdownTimer from '../../../ui/countdownTimer/countdownTimer';
import Description, {
  DescriptionType,
} from '../../../ui/description/description';

interface CountodwnOfferCardProps {
  toDate: string;
}

function CountdownOfferCard({ toDate }: CountodwnOfferCardProps) {
  return (
    <StyledCountdownOfferCard>
      <Title level={TitleLevel.H2} type={TitleType.PROMOCOUNTER}>
        Первоначальный взнос всего 15% вместо 20%!
      </Title>
      <Description type={DescriptionType.PROMOCOUNTDOWN}>
        Не упусти уникальную возможность стать собственником нового жилья.
        Ипотека на выгодных условиях ждёт именно тебя!
      </Description>
      <StyledCountdownOfferCardContainer>
        <StyledCountdownOfferCardText>
          До окончания предложения:
        </StyledCountdownOfferCardText>
        <CountdownTimer endDate={new Date(toDate)} />
      </StyledCountdownOfferCardContainer>
      <ReadMoreButton>Подробнее</ReadMoreButton>
    </StyledCountdownOfferCard>
  );
}

export default CountdownOfferCard;
