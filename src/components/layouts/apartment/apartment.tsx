import { IBuilding } from '../../../types/IBuilding';
import { StyledApartment } from './styled';
import ApartmentAbout from './apartmentAbout/apartmentAbout';
import ApartmentFeaturesList from './apartmentFeaturesList/apartmentFeaturesList';
import ApartmentMap from './apartmentMap/apartmentMap';
import ApartmentShowroom from './apartmentShowroom/apartmentShowroom';
import ApartmentCatalog from './apartmentCatalog/apartmentCatalog';
import ApartmentDocuments from './apartmentDocuments/apartmentDocuments';
import ApartmentHeader from './apartmentHeader/apartmentHeader';

function Apartment({ data }: { data: IBuilding }) {
  const apartmentDescription = data.description.split('<br>');
  const apartmentFeatures = JSON.parse(data.features);
  const apartmentLocation = JSON.parse(data.location);
  const latitude = apartmentLocation.latitude;
  const longitude = apartmentLocation.longitude;
  const rooms = JSON.parse(data.rooms);

  return (
    <StyledApartment>
      <ApartmentHeader title={data.title} bigImage={data.bigImage} />
      <ApartmentAbout
        apartmentDescription={apartmentDescription}
        apartmentImage={data.image}
      />
      <ApartmentFeaturesList apartmentFeatures={apartmentFeatures} />
      <ApartmentMap latitude={latitude} longitude={longitude} />
      <ApartmentShowroom rooms={rooms} />
      <ApartmentCatalog apartments={data.apartments} />
      <ApartmentDocuments documents={data.documents} />
    </StyledApartment>
  );
}

export default Apartment;
