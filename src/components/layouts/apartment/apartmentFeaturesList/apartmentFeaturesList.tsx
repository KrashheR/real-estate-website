import { IApartmentFeature } from '../../../../types/IBuilding';
import Container from '../../container/container';
import ApartmentFeature from './apartmentFeature/apartmentFeature';
import { StyledApartmentFeaturesList } from './styled';

interface ApartmentFeaturesListProps {
  apartmentFeatures: IApartmentFeature[];
}

function ApartmentFeaturesList({
  apartmentFeatures,
}: ApartmentFeaturesListProps) {
  return (
    <Container>
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
    </Container>
  );
}

export default ApartmentFeaturesList;
