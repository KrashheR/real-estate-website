import { StyledNavigation } from './styled';
import City from '../../ui/city/city';
import Logo from '../../ui/logo/logo';
import logoImage from '../../../assets/images/logo.svg';
import NavigationUl from './navigationUl/navigationUl';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <StyledNavigation>
      <Link to="/"><Logo srcImage={logoImage} /></Link>
      <NavigationUl />
      <City />
    </StyledNavigation>
  );
}

export default Navigation;
