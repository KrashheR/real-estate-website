import Promo from '../../components/layouts/promo/promo';
import { StyledMainPage, StyledMainPageBuildings } from './styled';
import BuildingsList from '../buildingsPage/buildingsList/buildingsList';
import BuildingsFilterForm from '../../components/forms/buildingsFilterForm/buildingsFilterForm';


function MainPage() {
  return (
    <StyledMainPage>
      <Promo />
      <StyledMainPageBuildings>
        <BuildingsFilterForm />
        <BuildingsList />
      </StyledMainPageBuildings>
    </StyledMainPage>
  );
}

export default MainPage;
