import Promo from '../../components/layouts/promo/promo';
import Apartments from '../../components/layouts/apartments/apartments';
import { StyledMainPage } from './styled';


function MainPage() {
  return (
    <StyledMainPage>
      <Promo />
      <Apartments />
    </StyledMainPage>
  );
}

export default MainPage;
