import { ICard } from '../../../types/ICard';
import Catalog from '../catalog/catalog';
import Description, { DescriptionType } from '../../ui/description/description';
import FullSizeImage from '../../ui/fullSizeImage/fullSizeImage';
import Showroom from '../../ui/showroom/showroom';
import Title, { TitleLevel, TitleType } from '../../ui/title/title';
import YandexMap from '../../ui/yandexMap/yandexMap';
import Container from '../container/container';
import ApartmentFeature, {
  FeatureType,
} from './apartmentFeature/apartmentFeature';
import {
  StyledApartment,
  StyledApartmentAbout,
  StyledApartmentAboutInfo,
  StyledApartmentCatalog,
  StyledApartmentFeatures,
  StyledApartmentImg,
  StyledApartmentMapContainer,
  StyledApartmentShowroom,
  StyledApartmentText,
  StyledApartmentTitle,
  StyledApartmentTitleContainer,
  StyledAppartmentMap,
  StyledCatalogContainer,
} from './styled';
import Documents from '../documents/documents';

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
  const rooms = JSON.parse(data.rooms);

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
        <StyledApartmentAbout>
          <Title level={TitleLevel.H2} type={TitleType.APARTMENTSECTION}>
            О проекте
          </Title>
          <StyledApartmentAboutInfo>
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
          </StyledApartmentAboutInfo>
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
        </StyledApartmentAbout>
      </Container>
      <StyledAppartmentMap>
        <StyledApartmentMapContainer>
          <Title level={TitleLevel.H2} type={TitleType.APARTMENTSECTION}>
            Расположение на карте
          </Title>
          <YandexMap latitude={latitude} longitude={longitude} />
        </StyledApartmentMapContainer>
      </StyledAppartmentMap>
      <Container>
        <StyledApartmentShowroom>
          <Title level={TitleLevel.H2} type={TitleType.APARTMENTSECTION}>
            Отделка квартиры
          </Title>
          <Showroom slides={rooms} />
        </StyledApartmentShowroom>
      </Container>
      <StyledApartmentCatalog>
        <StyledCatalogContainer>
          <Title level={TitleLevel.H2} type={TitleType.APARTMENTSECTION}>
            Выберите квартиру
          </Title>
          <Catalog apartments={data.apartments} />
        </StyledCatalogContainer>
      </StyledApartmentCatalog>
      <Container>
        <Documents />
      </Container>
    </StyledApartment>
  );
}

export default Apartment;
