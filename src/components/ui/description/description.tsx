import { StyledDescription } from './styled';

interface DescriptionProps {
  children: string;
  size: DescriptionSize;
}

export enum DescriptionSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XXL = 'xxl',
}

function Description ({ size, children }: DescriptionProps) {
  return <StyledDescription $descriptionSize={size}>{children}</StyledDescription>;
}

export default Description;
