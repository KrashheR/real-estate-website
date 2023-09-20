import React from 'react';
import {
  StyledCountdownOfferCard,
  StyledCountdownOfferCardSubtitle,
  StyledCountdownOfferCardContainer,
} from './styled';
import Title, {
  TitleLevel,
  TitleColor,
  TitleType,
} from '../../../ui/title/title';
import ReadMoreButton from '../../../ui/readMoreButton/readMoreButton';
import CountdownTimer from '../../../ui/countdownTimer/countdownTimer';

function CountdownOfferCard() {
  return (
    <StyledCountdownOfferCard>
      <Title
        level={TitleLevel.H2}
        color={TitleColor.PRIMARY}
        type={TitleType.PROMO}
      >
        Первоначальный взнос всего 15% вместо 20%!
      </Title>
      <StyledCountdownOfferCardSubtitle>
        Не упусти уникальную возможность стать собственником нового жилья.
        Ипотека на выгодных условиях ждёт именно тебя!
      </StyledCountdownOfferCardSubtitle>
      <StyledCountdownOfferCardContainer>
        <StyledCountdownOfferCardSubtitle>
          До окончания предложения:
        </StyledCountdownOfferCardSubtitle>
        <CountdownTimer endDate={new Date('30 October 2023 00:00:00')} />
      </StyledCountdownOfferCardContainer>
      <ReadMoreButton href="#">Подробнее</ReadMoreButton>
    </StyledCountdownOfferCard>
  );
}

export default CountdownOfferCard;
