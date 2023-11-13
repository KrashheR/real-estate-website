import { IApartmentFeature } from '../../../../types/ICard';
import ApartmentFeature from './apartmentFeature/apartmentFeature';
import { StyledApartmentFeaturesList } from './styled';

interface ApartmentFeaturesListProps {
  apartmentFeatures: IApartmentFeature[];
}

function ApartmentFeaturesList({apartmentFeatures}:ApartmentFeaturesListProps) {
  return (
    <StyledApartmentFeaturesList>
      {apartmentFeatures.map((item: IApartmentFeature) => {
        return (
          <ApartmentFeature
            type={item.type}
            descriptionText={item.description}
            key={item.id}
          />
        );
      })}
    </StyledApartmentFeaturesList>
  );
}

export default ApartmentFeaturesList;
