import { StyledNavigation } from './styled';
import NavigationUl from './navigationUl/navigationUl';
import NavigationMobile from './navigationMobile/navigationMobile';

function Navigation() {
  return (
    <StyledNavigation>
      <NavigationUl />
      <NavigationMobile />
    </StyledNavigation>
  );
}

export default Navigation;
