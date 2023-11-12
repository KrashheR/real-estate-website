import { StyledDescription } from './styled';

interface DescriptionProps {
  children: string;
  type: DescriptionType;
}

export enum DescriptionType {
  APARTMENT = 'apartment',
  APARTMENTFEAUTURE = 'apartmentFeature',
  DOCUMENTS = 'dociments',
  PROMO = 'apartment',
}

const Description: React.FC<DescriptionProps> = ({ type, children }) =>  {
  return <StyledDescription $descriptionType={type}>{children}</StyledDescription>;
}

export default Description;
