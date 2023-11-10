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
import { ApartmentData, ICard } from '../../../types/ICard';
import { Link } from 'react-router-dom';

export enum CardType {
  PREMIUM = 'premium',
  STANDART = 'standart',
}

interface Card {
  data: ICard;
}

function sumApartmentsNum(apartmentData: ApartmentData[]):number {
  return apartmentData.reduce((acc, item) => {
    return Number(item.num) + acc;
  }, 0);
}

function findMinPrice(apartmentData: ApartmentData[]): number {
  const result = apartmentData.sort((itemA, itemB) => {
    return itemA.price - itemB.price;
  })
  return result[0].price;
}

function Card({ data }: Card) {
  const dataApartments = JSON.parse(data.apartments);
  const apartmentItems = dataApartments.apartments;
  const parkingItems = dataApartments.parking;
  const appartmentSum = sumApartmentsNum(apartmentItems);
  const parkingSum = sumApartmentsNum(parkingItems);
  const apartmentMinPrice = findMinPrice(apartmentItems);
  const parkingMinPrice = findMinPrice(parkingItems);
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
              {appartmentSum} квартир
            </StyledCardAvaiable>
            <StyledCardAvaiable $area={'housePrice'}>
              от {apartmentMinPrice} млн.
            </StyledCardAvaiable>
            <StyledCardAvaiable $area={'parking'}>
              {parkingSum} машиномест
            </StyledCardAvaiable>
            <StyledCardAvaiable $area={'parkingPrice'}>
              от {parkingMinPrice} млн.
            </StyledCardAvaiable>
            <StyledCardButton $type={data.type}>ПОДРОБНЕЕ</StyledCardButton>
          </StyledCardAvaiableContainer>
        </StyledCardDescription>
      </StyledCard>
    </Link>
  );
}

export default Card;
