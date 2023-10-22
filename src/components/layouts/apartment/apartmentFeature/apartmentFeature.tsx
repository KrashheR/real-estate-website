import Description, { DescriptionType } from "../../../ui/description/description";
import Title, { TitleType, TitleLevel } from "../../../ui/title/title";
import { StyledApartmentFeature, StyledApartmentFeatureContainer, StyledApartmentFeatureImage } from "./styled";
import metroImg from "../../../../assets/images/apartmentFeatures/metro.svg";
import hospitalImg from "../../../../assets/images/apartmentFeatures/hospital.svg"
import locationImg from "../../../../assets/images/apartmentFeatures/location.svg"
import infrastructureImg from "../../../../assets/images/apartmentFeatures/infrastructure.svg"

export enum FeatureType {
  METRO = 'metro',
  INFRASTRUCTURE = 'infrastructure',
  LOCATION = 'location',
  HOSPITAL = 'hospital',
}

interface FeatureProps {
  type: FeatureType;
  descriptionText: string;
}

function ApartmentFeature({descriptionText, type}: FeatureProps) {
  let imageSrc = "";
  let titleText = "";

  switch(type) {
    case FeatureType.METRO:
      imageSrc = metroImg;
      titleText = "Метро";
      break;
    case FeatureType.INFRASTRUCTURE:
      imageSrc = infrastructureImg;
      titleText = "Инфраструктура";
      break;
    case FeatureType.LOCATION:
      imageSrc = locationImg;
      titleText = "Расположение";
      break;
    case FeatureType.HOSPITAL:
      imageSrc = hospitalImg;
      titleText = "Медицина";
      break;
  }

  return(
    <StyledApartmentFeature>
      <StyledApartmentFeatureImage src={imageSrc}/>
      <StyledApartmentFeatureContainer>
        <Title level={TitleLevel.H3} type={TitleType.APARTMENTFEATURE}>{titleText}</Title>
        <Description type={DescriptionType.APARTMENTFEAUTURE}>{descriptionText}</Description>
      </StyledApartmentFeatureContainer>
    </StyledApartmentFeature>
  );
}

export default ApartmentFeature;