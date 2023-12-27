import Description, {
  DescriptionSize,
} from '../../../../components/ui/description/description';
import Title, {
  TitleSize,
  TitleWeight,
  TitleLevel,
} from '../../../../components/ui/title/title';
import {
  StyledApartmentFeature,
  StyledApartmentFeatureContainer,
  StyledApartmentFeatureImage,
} from './styled';
import metroImg from '../../../../assets/images/apartmentFeatures/metro.svg';
import hospitalImg from '../../../../assets/images/apartmentFeatures/hospital.svg';
import locationImg from '../../../../assets/images/apartmentFeatures/location.svg';
import infrastructureImg from '../../../../assets/images/apartmentFeatures/infrastructure.svg';

export enum FeatureType {
  METRO = 'metro',
  INFRASTRUCTURE = 'infrastructure',
  LOCATION = 'location',
  HOSPITAL = 'hospital',
}

interface FeatureProps {
  type: string;
  descriptionText: string;
}

function ApartmentFeature({ descriptionText, type }: FeatureProps) {
  let imageSrc = '';
  let titleText = '';

  switch (type) {
    case FeatureType.METRO:
      imageSrc = metroImg;
      titleText = 'Метро';
      break;
    case FeatureType.INFRASTRUCTURE:
      imageSrc = infrastructureImg;
      titleText = 'Инфраструктура';
      break;
    case FeatureType.LOCATION:
      imageSrc = locationImg;
      titleText = 'Расположение';
      break;
    case FeatureType.HOSPITAL:
      imageSrc = hospitalImg;
      titleText = 'Медицина';
      break;
  }

  return (
    <StyledApartmentFeature>
      <StyledApartmentFeatureImage src={imageSrc} alt={'Значок ' + titleText} />
      <StyledApartmentFeatureContainer>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.S}
          weight={TitleWeight.SEMIBOLD}
        >
          {titleText}
        </Title>
        <Description size={DescriptionSize.XS}>{descriptionText}</Description>
      </StyledApartmentFeatureContainer>
    </StyledApartmentFeature>
  );
}

export default ApartmentFeature;
