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

type Card = {
  data: CardProps;
};

type CardProps = {
  type: CardType;
  href: string;
  image: string;
  title: string;
  parking: string;
  apartments: string;
};

function Card({ data }: Card) {

  let oneRoom = JSON.parse(data.apartments);
  console.log(oneRoom["1"]);
  const parking = JSON.parse(data.parking);

  return (
    <StyledCard $type={data.type}>
      <StyledCardTitleContainer>
        <Title
          level={TitleLevel.H2}
          color={data.type === CardType.PREMIUM ? TitleColor.WHITE : TitleColor.GRAY}
          type={TitleType.CARD}
        >
          {data.title}
        </Title>
        <StyledCardPlaceContainer>
          <StyledCardPlaceIcon
            src={data.type === CardType.PREMIUM ? metroPremium : metro}
          />
          <StyledCardPlaceText>Щелковская</StyledCardPlaceText>
          <StyledCardPlaceIcon
            src={data.type === CardType.PREMIUM ? humanPremium : human}
          />
          <StyledCardPlaceText>от 10 мин.</StyledCardPlaceText>
        </StyledCardPlaceContainer>
      </StyledCardTitleContainer>
      <StyledCardAvaiableContainer>
        <StyledCardAvaiable $area={'house'}>20 квартир</StyledCardAvaiable>
        <StyledCardAvaiable $area={'housePrice'}>от 10 млн.</StyledCardAvaiable>
        <StyledCardAvaiable $area={'parking'}>{parking.num} машиномест</StyledCardAvaiable>
        <StyledCardAvaiable $area={'parkingPrice'}>
          от {parking.price} млн.
        </StyledCardAvaiable>
        <StyledCardButton $type={data.type}>ПОДРОБНЕЕ</StyledCardButton>
      </StyledCardAvaiableContainer>
    </StyledCard>
  );
}

export default Card;
