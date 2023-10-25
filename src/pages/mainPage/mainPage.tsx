import Promo from '../../components/layouts/promo/promo';
import Projects from '../../components/layouts/projects/projects';
import { StyledMainPage } from './styled';


function MainPage() {
  return (
    <StyledMainPage>
      <Promo />
      <Projects />
    </StyledMainPage>
  );
}

export default MainPage;
