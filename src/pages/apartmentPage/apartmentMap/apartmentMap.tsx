import Title, { TitleLevel, TitleSize, TitleWeight } from '../../../components/ui/title/title';
import YandexMap from '../../../components/ui/yandexMap/yandexMap';
import { StyledApartmentMap, StyledApartmentMapContainer } from './styled';

interface ApartmentMapProps {
  latitude: number;
  longitude: number;
}

function ApartmentMap({ latitude, longitude }: ApartmentMapProps) {
  return (
    <StyledApartmentMap>
      <StyledApartmentMapContainer>
      <Title
          level={TitleLevel.H2}
          size={TitleSize.XL}
          weight={TitleWeight.BOLD}
        >
          Расположение на карте
        </Title>
        <YandexMap latitude={latitude} longitude={longitude} />
      </StyledApartmentMapContainer>
    </StyledApartmentMap>
  );
}

export default ApartmentMap;
