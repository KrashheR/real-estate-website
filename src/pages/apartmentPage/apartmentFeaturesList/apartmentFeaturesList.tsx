import { IApartmentFeature } from '../../../types/IBuilding';
import Container from '../../../components/layouts/container/container';
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
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              key={item.id}
            />
          );
        })}
      </StyledApartmentFeaturesList>
    </Container>
  );
}

export default ApartmentFeaturesList;
