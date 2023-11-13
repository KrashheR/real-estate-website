import { ICard } from '../../../types/ICard';
import Catalog from '../catalog/catalog';
import FullSizeImage from '../../ui/fullSizeImage/fullSizeImage';
import Showroom from '../../ui/showroom/showroom';
import Title, { TitleLevel, TitleType } from '../../ui/title/title';
import YandexMap from '../../ui/yandexMap/yandexMap';
import Container from '../container/container';
import {
  StyledApartment,
  StyledApartmentCatalog,
  StyledApartmentMapContainer,
  StyledApartmentShowroom,
  StyledApartmentTitle,
  StyledApartmentTitleContainer,
  StyledAppartmentMap,
  StyledCatalogContainer,
} from './styled';
import Documents from '../documents/documents';
import ApartmentAbout from './apartmentAbout/apartmentAbout';
import ApartmentFeaturesList from './apartmentFeaturesList/apartmentFeaturesList';

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
        <ApartmentAbout
          apartmentDescription={apartmentDescription}
          apartmentImage={data.image}
        />
      </Container>
      <Container>
        <ApartmentFeaturesList apartmentFeatures={apartmentFeatures}/>
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
        <Documents documents={data.documents} />
      </Container>
    </StyledApartment>
  );
}

export default Apartment;
