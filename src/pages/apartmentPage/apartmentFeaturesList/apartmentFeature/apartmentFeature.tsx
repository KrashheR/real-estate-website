import Description, {
  DescriptionSize,
} from '../../../../components/ui/description/description';
import Title, {
  TitleSize,
  TitleWeight,
  TitleLevel,
} from '../../../../components/ui/title/title';
import { IApartmentFeature } from '../../../../types/IBuilding';
import {
  StyledApartmentFeature,
  StyledApartmentFeatureContainer,
  StyledApartmentFeatureImage,
} from './styled';

function ApartmentFeature({ title, description, imageSrc }: IApartmentFeature) {
  return (
    <StyledApartmentFeature>
      <StyledApartmentFeatureImage src={imageSrc} alt={title} />
      <StyledApartmentFeatureContainer>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.S}
          weight={TitleWeight.SEMIBOLD}
        >
          {title}
        </Title>
        <Description size={DescriptionSize.XS}>{description}</Description>
      </StyledApartmentFeatureContainer>
    </StyledApartmentFeature>
  );
}

export default ApartmentFeature;
