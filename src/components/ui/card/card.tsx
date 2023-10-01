import React from 'react';
import {
  StyledCard,
  StyledCardAvaiable,
  StyledCardAvaiableContainer,
  StyledCardButton,
  StyledCardPlaceContainer,
  StyledCardPlaceText,
  StyledCardPlaceIcon,
  StyledCardTitleContainer,
} from './styled';
import Title, { TitleLevel, TitleColor, TitleType } from '../title/title';
import metroPremium from '../../../assets/images/card/metroPremium.svg';
import humanPremium from '../../../assets/images/card/humanPremium.svg';
import metro from '../../../assets/images/card/metro.svg';
import human from '../../../assets/images/card/human.svg';


export enum CardType {
  PREMIUM = 'premium',
  STANDART = 'standart',
}

interface CardProps {
  type: CardType;
}

function Card({type}: CardProps) {
  return (
    <StyledCard $type={type}>
      <StyledCardTitleContainer>
        <Title
          level={TitleLevel.H2}
          color={type === CardType.PREMIUM ? TitleColor.WHITE : TitleColor.GRAY}
          type={TitleType.CARD}
        >
          CARD NAME
        </Title>
        <StyledCardPlaceContainer>
          <StyledCardPlaceIcon src={type === CardType.PREMIUM ? metroPremium : metro} />
          <StyledCardPlaceText>Щелковская</StyledCardPlaceText>
          <StyledCardPlaceIcon src={type === CardType.PREMIUM ? humanPremium : human} />
          <StyledCardPlaceText>от 10 мин.</StyledCardPlaceText>
        </StyledCardPlaceContainer>
      </StyledCardTitleContainer>
      <StyledCardAvaiableContainer>
        <StyledCardAvaiable $area={'house'}>20 квартир</StyledCardAvaiable>
        <StyledCardAvaiable $area={'housePrice'}>от 10 млн.</StyledCardAvaiable>
        <StyledCardAvaiable $area={'parking'}>10 машиномест</StyledCardAvaiable>
        <StyledCardAvaiable $area={'parkingPrice'}>
          от 1 млн.
        </StyledCardAvaiable>
        <StyledCardButton $type={type}>ПОДРОБНЕЕ</StyledCardButton>
      </StyledCardAvaiableContainer>
    </StyledCard>
  );
}

export default Card;
