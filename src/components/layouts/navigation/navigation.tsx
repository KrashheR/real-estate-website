import { StyledNavigation } from './styled';
import City from '../../ui/city/city';
import Logo from '../../ui/logo/logo';
import logoImage from '../../../assets/images/logo.svg';
import NavigationUl from './navigationUl/navigationUl';

function Navigation() {
  return (
    <StyledNavigation>
      <Logo srcImage={logoImage} />
      <NavigationUl />
      <City />
    </StyledNavigation>
  );
}

export default Navigation;
