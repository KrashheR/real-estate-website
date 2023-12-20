import { StyledLogo } from './styled';

interface LogoProps {
  alt: string;
  srcImage: string;
}

function Logo(props: LogoProps) {
  return <StyledLogo src={props.srcImage} alt={props.alt}></StyledLogo>;
}

export default Logo;
