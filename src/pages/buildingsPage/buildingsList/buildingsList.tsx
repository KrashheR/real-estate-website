import { StyledBuildingsList, StyledBuildingsListPlaceholderTitle } from "./styled";
import BuildingsCard from "../buildingsCard/buildingsCard";
import { useAppSelector } from '../../../hooks/redux';
import { selectFilteredBuildings } from '../../../store/reducers/buildings/BuildingSelectors';

function BuildingsList() {
  const filteredBuildings = useAppSelector(selectFilteredBuildings);

  return (
    <StyledBuildingsList>
      {filteredBuildings.map((item) => {
        return (
          <BuildingsCard data={item} key={item.id} />
        );
      })}
      {filteredBuildings.length === 0 && <StyledBuildingsListPlaceholderTitle>Нет квартир, соответствующих вашим фильтрам</StyledBuildingsListPlaceholderTitle>}
    </StyledBuildingsList>
  );
}

export default BuildingsList;
