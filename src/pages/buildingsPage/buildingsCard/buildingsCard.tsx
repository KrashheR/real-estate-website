import {
  StyledBuildingsCard,
  StyledBuildingsCardLink,
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
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../components/ui/title/title';
import metroPremium from '../../../assets/images/card/metroPremium.svg';
import humanPremium from '../../../assets/images/card/humanPremium.svg';
import metro from '../../../assets/images/card/metro.svg';
import human from '../../../assets/images/card/human.svg';
import { IBuilding } from '../../../types/IBuilding';
import {
  findMinPrice,
  sumApartmentsNum,
} from '../../../utils/buildingPriceUtils';

export enum CardType {
  PREMIUM = 'premium',
  STANDART = 'standart',
}

interface BuildingsCardProps {
  data: IBuilding;
}

function BuildingsCard({ data }: BuildingsCardProps) {
  const dataApartments = JSON.parse(data.apartments);
  const [appartmentSum, parkingSum] = sumApartmentsNum(dataApartments);
  const [apartmentMinPrice, parkingMinPrice] = findMinPrice(dataApartments);
  const link = `${window.location.origin}/buildings/${data.id}`;

  return (
    <StyledBuildingsCard>
      <StyledBuildingsCardLink to={link} $type={data.type}>
        <StyledBuildingsCardPicture>
          <source srcSet={data.imageMobile} media="(max-width: 576px)" />
          <StyledBuildingsCardImage src={data.image} alt={data.title} />
        </StyledBuildingsCardPicture>
        <StyledBuildingsCardDescription $type={data.type}>
          <StyledBuildingsCardTitleContainer>
            <Title
              level={TitleLevel.H2}
              size={TitleSize.M}
              weight={TitleWeight.SEMIBOLD}
            >
              {data.title}
            </Title>
            <StyledBuildingsCardPlaceContainer>
              <StyledBuildingsCardPlaceIcon
                src={data.type === CardType.PREMIUM ? metroPremium : metro}
                alt="На метро"
              />
              <StyledBuildingsCardPlaceText>
                {data.metro}
              </StyledBuildingsCardPlaceText>
              <StyledBuildingsCardPlaceIcon
                src={data.type === CardType.PREMIUM ? humanPremium : human}
                alt="Пешком"
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
      </StyledBuildingsCardLink>
    </StyledBuildingsCard>
  );
}

export default BuildingsCard;
