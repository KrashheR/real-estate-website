import Promo from '../../components/layouts/promo/promo';
import { StyledMainPage, StyledMainPageBuildings } from './styled';
import BuildingsList from '../buildingsPage/buildingsList/buildingsList';
import BuildingsFilterForm from '../../components/forms/buildingsFilterForm/buildingsFilterForm';
import { useAppSelector } from '../../hooks/redux';
import { selectBuildingsMinMaxCalculatingState, selectFilteredBuildings } from '../../store/reducers/buildings/buildingSelectors';
import LoadingLayout from '../../components/layouts/loadingLayout/loadingLayout';

function MainPage() {
  const filteredBuildings = useAppSelector(selectFilteredBuildings);
  const isDataLoaded = useAppSelector(selectBuildingsMinMaxCalculatingState);

  if(!isDataLoaded){
    return (
      <StyledMainPage>
      <Promo />
      <StyledMainPageBuildings>
        <LoadingLayout />
      </StyledMainPageBuildings>
    </StyledMainPage>
    );
  }

  return (
    <StyledMainPage>
      <Promo />
      <StyledMainPageBuildings>
        <BuildingsFilterForm />
        <BuildingsList filteredBuildings={filteredBuildings} />
      </StyledMainPageBuildings>
    </StyledMainPage>
  );
}

export default MainPage;
