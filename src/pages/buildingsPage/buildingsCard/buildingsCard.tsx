import {
  StyledBuildingsCard,
  StyledBuildingsCardAvaiable,
  StyledBuildingsCardAvaiableContainer,
  StyledBuildingsCardButton,
  StyledBuildingsCardPlaceContainer,
  StyledBuildingsCardPlaceText,
  StyledBuildingsCardPlaceIcon,
  StyledBuildingsCardTitleContainer,
  StyledBuildingsCardPicture,
  StyledBuildingsCardDescription,
  StyledBuildingsCardImage,
} from './styled';
import Title, {
  TitleLevel, TitleSize, TitleWeight,
} from '../../../components/ui/title/title';
import metroPremium from '../../../assets/images/card/metroPremium.svg';
import humanPremium from '../../../assets/images/card/humanPremium.svg';
import metro from '../../../assets/images/card/metro.svg';
import human from '../../../assets/images/card/human.svg';
import { IApartmentData, IBuilding } from '../../../types/IBuilding';

export enum CardType {
  PREMIUM = 'premium',
  STANDART = 'standart',
}

interface BuildingsCardProps {
  data: IBuilding;
}

function sumApartmentsNum(apartmentData: IApartmentData[]): number[] {
  let apartmentSum = 0;
  let parkingSum = 0;

  apartmentData.forEach((item) => {
    if (item.roomNum === 'parking') {
      parkingSum += item.num;
    } else {
      apartmentSum += item.num;
    }
  });

  return [apartmentSum, parkingSum];
}

function findMinPrice(apartmentData: IApartmentData[]): number[] {
  let apartmentMin = 999;
  let parkingMin = 999;

  apartmentData.forEach((item) => {
    if (item.roomNum === 'parking') {
      parkingMin = Math.min(parkingMin, item.price);
    } else {
      apartmentMin = Math.min(apartmentMin, item.price);
    }
  });
  return [apartmentMin, parkingMin];
}

function BuildingsCard({ data }: BuildingsCardProps) {
  const dataApartments = JSON.parse(data.apartments);
  const [appartmentSum, parkingSum] = sumApartmentsNum(dataApartments);
  const [apartmentMinPrice, parkingMinPrice] = findMinPrice(dataApartments);
  const link = `${window.location.origin}/buildings/${data.id}`;

  return (
    <StyledBuildingsCard to={link} $type={data.type}>
      <StyledBuildingsCardPicture>
        <source srcSet={data.imageMobile} media='(max-width: 576px)'/>
        <StyledBuildingsCardImage src={data.image}/>
      </StyledBuildingsCardPicture>
      <StyledBuildingsCardDescription $type={data.type}>
        <StyledBuildingsCardTitleContainer>
          <Title level={TitleLevel.H2} size={TitleSize.M} weight={TitleWeight.SEMIBOLD}>
            {data.title}
          </Title>
          <StyledBuildingsCardPlaceContainer>
            <StyledBuildingsCardPlaceIcon
              src={data.type === CardType.PREMIUM ? metroPremium : metro}
            />
            <StyledBuildingsCardPlaceText>
              {data.metro}
            </StyledBuildingsCardPlaceText>
            <StyledBuildingsCardPlaceIcon
              src={data.type === CardType.PREMIUM ? humanPremium : human}
            />
            <StyledBuildingsCardPlaceText>
              от {data.walkTime} мин.
            </StyledBuildingsCardPlaceText>
          </StyledBuildingsCardPlaceContainer>
        </StyledBuildingsCardTitleContainer>
        <StyledBuildingsCardAvaiableContainer>
          <StyledBuildingsCardAvaiable $area={'house'}>
            {appartmentSum} квартир
          </StyledBuildingsCardAvaiable>
          <StyledBuildingsCardAvaiable $area={'housePrice'}>
            от {apartmentMinPrice} млн.
          </StyledBuildingsCardAvaiable>
          <StyledBuildingsCardAvaiable $area={'parking'}>
            {parkingSum} машиномест
          </StyledBuildingsCardAvaiable>
          <StyledBuildingsCardAvaiable $area={'parkingPrice'}>
            от {parkingMinPrice} млн.
          </StyledBuildingsCardAvaiable>
          <StyledBuildingsCardButton $type={data.type}>
            Подробнее
          </StyledBuildingsCardButton>
        </StyledBuildingsCardAvaiableContainer>
      </StyledBuildingsCardDescription>
    </StyledBuildingsCard>
  );
}

export default BuildingsCard;
