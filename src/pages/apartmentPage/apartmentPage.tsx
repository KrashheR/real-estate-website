import { IBuilding } from '../../types/IBuilding';
import { StyledApartment, StyledApartmentNotFound } from './styled';
import ApartmentAbout from './apartmentAbout/apartmentAbout';
import ApartmentFeaturesList from './apartmentFeaturesList/apartmentFeaturesList';
import ApartmentMap from './apartmentMap/apartmentMap';
import ApartmentShowroom from './apartmentShowroom/apartmentShowroom';
import ApartmentCatalog from './apartmentCatalog/apartmentCatalog';
import ApartmentDocuments from './apartmentDocuments/apartmentDocuments';
import ApartmentHeader from './apartmentHeader/apartmentHeader';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { selectBuildingById } from '../../store/reducers/buildings/buildingSelectors';

function ApartmentPage() {
  let { id } = useParams<{ id: string }>();

  const data = useAppSelector((state) => selectBuildingById(state, id));

  if (!data) {
    return (
      <StyledApartment>
        <StyledApartmentNotFound>
          Такого здания не найдено :(
        </StyledApartmentNotFound>
      </StyledApartment>
    );
  }

  const apartmentDescription = data.description.split('<br>');
  const apartmentFeatures = JSON.parse(data.features);
  const apartmentLocation = JSON.parse(data.location);
  const latitude = apartmentLocation.latitude;
  const longitude = apartmentLocation.longitude;
  const rooms = JSON.parse(data.rooms);

  return (
    <StyledApartment>
      <ApartmentHeader
        title={data.title}
        bigImage={data.bigImage}
        bigMobileImage={data.bigMobileImage}
      />
      <ApartmentAbout
        apartmentDescription={apartmentDescription}
        apartmentImage={data.image}
        apartmentImageMobile={data.imageMobile}
      />
      <ApartmentFeaturesList apartmentFeatures={apartmentFeatures} />
      <ApartmentMap latitude={latitude} longitude={longitude} />
      <ApartmentShowroom rooms={rooms} />
      <ApartmentCatalog apartments={data.apartments} />
      <ApartmentDocuments documents={data.documents} />
    </StyledApartment>
  );
}

export default ApartmentPage;
