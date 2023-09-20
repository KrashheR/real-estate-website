import Container from '../container/container';
import Navigation from '../navigation/navigation';
import { StyledHeader } from './styled';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Navigation />
      </Container>
    </StyledHeader>
  );
}

export default Header;
