import { StyledLogo } from './styled';

interface LogoProps {
  srcImage: string;
}

function Logo({ srcImage }: LogoProps) {
  return <StyledLogo src={srcImage}></StyledLogo>;
}

export default Logo;
