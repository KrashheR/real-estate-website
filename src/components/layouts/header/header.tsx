import Navigation from '../navigation/navigation';
import { StyledHeader, StyledHeaderContainer } from './styled';
import Logo from '../../ui/logo/logo';
import logoImage from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import Phone, { PhoneType } from '../../ui/phone/phone';

function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Link to="/"><Logo srcImage={logoImage} /></Link>
        <Navigation />
        <Phone phoneType={PhoneType.HEADER}/>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}

export default Header;
