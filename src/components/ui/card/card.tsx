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
  StyledCardImage,
  StyledCardDescription,
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
  metro: string;
  walkTime: number;
};

interface JsonObject {
  [key: string]: JsonObject | { num: string; price: string };
}

function sumField(obj: JsonObject, field: string): number {
  let sum = 0;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      if (typeof value === 'object') {
        sum += sumField(value as JsonObject, field);
      } else if (key === field) {
        sum += parseInt(value as string, 10);
      }
    }
  }
  return sum;
}

function findMinPrice(obj: JsonObject, field: string): number {
  let minPrice = Infinity;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      if (typeof value === 'object') {
        minPrice = Math.min(minPrice, findMinPrice(value as JsonObject, field));
      } else if (key === field) {
        minPrice = Math.min(minPrice, parseFloat(value as string));
      }
    }
  }
  return minPrice;
}

function Card({ data }: Card) {
  const apartments = JSON.parse(data.apartments);
  const numSum = sumField(apartments, 'num');
  const minPrice = findMinPrice(apartments, 'price');
  const parking = JSON.parse(data.parking);

  return (
    <StyledCard $type={data.type}>
      <StyledCardImage src={data.image}/>
      <StyledCardDescription $type={data.type}>
        <StyledCardTitleContainer>
          <Title
            level={TitleLevel.H2}
            color={
              data.type === CardType.PREMIUM ? TitleColor.WHITE : TitleColor.GRAY
            }
            type={TitleType.CARD}
          >
            {data.title}
          </Title>
          <StyledCardPlaceContainer>
            <StyledCardPlaceIcon
              src={data.type === CardType.PREMIUM ? metroPremium : metro}
            />
            <StyledCardPlaceText>{data.metro}</StyledCardPlaceText>
            <StyledCardPlaceIcon
              src={data.type === CardType.PREMIUM ? humanPremium : human}
            />
            <StyledCardPlaceText>от {data.walkTime} мин.</StyledCardPlaceText>
          </StyledCardPlaceContainer>
        </StyledCardTitleContainer>
        <StyledCardAvaiableContainer>
          <StyledCardAvaiable $area={'house'}>
            {numSum} квартир
          </StyledCardAvaiable>
          <StyledCardAvaiable $area={'housePrice'}>
            от {minPrice} млн.
          </StyledCardAvaiable>
          <StyledCardAvaiable $area={'parking'}>
            {parking.num} машиномест
          </StyledCardAvaiable>
          <StyledCardAvaiable $area={'parkingPrice'}>
            от {parking.price} млн.
          </StyledCardAvaiable>
          <StyledCardButton $type={data.type}>ПОДРОБНЕЕ</StyledCardButton>
        </StyledCardAvaiableContainer>
      </StyledCardDescription>
    </StyledCard>
  );
}

export default Card;
