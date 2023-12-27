import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { StyledMap } from './styled';

interface YMapsProps {
  latitude: number;
  longitude: number;
}

function YandexMap({latitude, longitude}: YMapsProps) {

  return(
    <StyledMap>
      <YMaps query={{apikey: "caee58c2-bb49-4773-897c-9f20bf105bf7"}}>
        <Map
          defaultState={{
            center: [latitude, longitude],
            zoom: 16,
          }}
          width="100%"
          height="550px"
        >
          <Placemark geometry={[latitude, longitude]} />
        </Map>
      </YMaps>
    </StyledMap>

  );
}

export default YandexMap;