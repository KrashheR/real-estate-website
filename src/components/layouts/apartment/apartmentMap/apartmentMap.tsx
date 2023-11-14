import Title, { TitleLevel, TitleType } from '../../../ui/title/title';
import YandexMap from '../../../ui/yandexMap/yandexMap';
import { StyledApartmentMap, StyledApartmentMapContainer } from './styled';

interface ApartmentMapProps {
  latitude: number;
  longitude: number;
}

function ApartmentMap({ latitude, longitude }: ApartmentMapProps) {
  return (
    <StyledApartmentMap>
      <StyledApartmentMapContainer>
        <Title level={TitleLevel.H2} type={TitleType.APARTMENTSECTION}>
          Расположение на карте
        </Title>
        <YandexMap latitude={latitude} longitude={longitude} />
      </StyledApartmentMapContainer>
    </StyledApartmentMap>
  );
}

export default ApartmentMap;
