import { ICard } from '../../../types/ICard';
import Description, { DescriptionType } from '../../ui/description/description';
import FullSizeImage from '../../ui/fullSizeImage/fullSizeImage';
import Title, { TitleLevel, TitleType } from '../../ui/title/title';
import YandexMap from '../../ui/yandexMap/yandexMap';
import Container from '../container/container';
import ApartmentFeature, {
  FeatureType,
} from './apartmentFeature/apartmentFeature';
import {
  StyledApartment,
  StyledApartmentAbout,
  StyledApartmentFeatures,
  StyledApartmentImg,
  StyledApartmentText,
  StyledApartmentTitle,
  StyledApartmentTitleContainer,
  StyledAppartmentMap,
} from './styled';

interface ApartmentFeature {
  type: FeatureType;
  description: string;
  id: string;
}

function Apartment({ data }: { data: ICard }) {
  const apartmentDescription = data.description.split('<br>');
  const apartmentFeatures = JSON.parse(data.features);
  const apartmentLocation = JSON.parse(data.location);
  const latitude = apartmentLocation.latitude;
  const longitude = apartmentLocation.longitude;

  return (
    <StyledApartment>
      <StyledApartmentTitleContainer>
        <FullSizeImage imageSrc={data.bigImage} />
        <Container>
          <StyledApartmentTitle>
            <Title level={TitleLevel.H1} type={TitleType.APARTMENT}>
              {'ЖК «' + data.title + '»'}
            </Title>
          </StyledApartmentTitle>
        </Container>
      </StyledApartmentTitleContainer>
      <Container>
        <Title level={TitleLevel.H2} type={TitleType.APARTMENT}>
          О проекте
        </Title>
        <StyledApartmentAbout>
          <StyledApartmentText>
            {apartmentDescription.map((item, index) => {
              const key = `${index}-${item.substring(0, 5)}`;
              return (
                <Description type={DescriptionType.APARTMENT} key={key}>
                  {item}
                </Description>
              );
            })}
          </StyledApartmentText>
          <StyledApartmentImg src={data.image} />
        </StyledApartmentAbout>
        <StyledApartmentFeatures>
          {apartmentFeatures.map((item: ApartmentFeature) => {
            return (
              <ApartmentFeature
                type={item.type}
                descriptionText={item.description}
                key={item.id}
              />
            );
          })}
        </StyledApartmentFeatures>
        <StyledAppartmentMap>
          <Title level={TitleLevel.H2} type={TitleType.APARTMENTMAP}>
            Расположение на карте
          </Title>
          <YandexMap latitude={latitude} longitude={longitude} />
        </StyledAppartmentMap>
      </Container>
    </StyledApartment>
  );
}

export default Apartment;
