import { YMaps, Map, Placemark } from 'react-yandex-maps';

interface YMapsProps {
  latitude: number;
  longitude: number;
}

function YandexMap({latitude, longitude}: YMapsProps) {

  return(
    <YMaps>
      <Map
        defaultState={{
          center: [latitude, longitude],
          zoom: 16,
        }}
        width="100%"
        height="500px"
      >
        <Placemark geometry={[latitude, longitude]} />
      </Map>
    </YMaps>
  );
}

export default YandexMap;