import Title, { TitleLevel, TitleSize, TitleWeight } from '../../components/ui/title/title';
import { StyledBuildings, StyledBuildingsContainer } from './styled';
import BuildingsFilterForm from '../../components/forms/buildingsFilterForm/buildingsFilterForm';
import BuildingsList from './buildingsList/buildingsList';

function BuildingsPage() {
  return (
    <StyledBuildings>
      <StyledBuildingsContainer>
      <Title
          level={TitleLevel.H2}
          size={TitleSize.XL}
          weight={TitleWeight.BOLD}
        >
          Каталог новостроек:
        </Title>
        <BuildingsFilterForm />
        <BuildingsList />
      </StyledBuildingsContainer>
    </StyledBuildings>
  );
}

export default BuildingsPage;
