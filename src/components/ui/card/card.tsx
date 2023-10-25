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
import Title, { TitleLevel, TitleType } from '../title/title';
import metroPremium from '../../../assets/images/card/metroPremium.svg';
import humanPremium from '../../../assets/images/card/humanPremium.svg';
import metro from '../../../assets/images/card/metro.svg';
import human from '../../../assets/images/card/human.svg';
import { ICard } from '../../../types/ICard';
import { Link } from 'react-router-dom';

export enum CardType {
  PREMIUM = 'premium',
  STANDART = 'standart',
}

interface Card {
  data: ICard;
}

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

function findExtremePrice(
  obj: JsonObject,
  field: string,
  findMax: boolean,
): number {
  let extremePrice = findMax ? -Infinity : Infinity;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      if (typeof value === 'object') {
        extremePrice = findMax
          ? Math.max(
              extremePrice,
              findExtremePrice(value as JsonObject, field, findMax),
            )
          : Math.min(
              extremePrice,
              findExtremePrice(value as JsonObject, field, findMax),
            );
      } else if (key === field) {
        extremePrice = findMax
          ? Math.max(extremePrice, parseFloat(value as string))
          : Math.min(extremePrice, parseFloat(value as string));
      }
    }
  }
  return extremePrice;
}

function Card({ data }: Card) {
  const apartments = JSON.parse(data.apartments);
  const numSum = sumField(apartments, 'num');
  const minPrice = findExtremePrice(apartments, 'price', false);
  const parking = JSON.parse(data.parking);
  const link = `${window.location.origin}/apartments/${data.title}`;

  return (
    <Link to={link}>
      <StyledCard $type={data.type}>
        <StyledCardImage src={data.image} />
        <StyledCardDescription $type={data.type}>
          <StyledCardTitleContainer>
            <Title level={TitleLevel.H2} type={TitleType.CARD}>
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
    </Link>
  );
}

export default Card;
