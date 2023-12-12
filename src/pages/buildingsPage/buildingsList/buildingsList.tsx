import { StyledBuildingsList } from './styled';
import BuildingsCard from '../buildingsCard/buildingsCard';
import { IBuilding } from '../../../types/IBuilding';
import BuildingListEmpty from './buildingListEmpty/buildingListEmpty';

interface BuildingListProps {
  filteredBuildings: IBuilding[];
}

function BuildingsList({ filteredBuildings }: BuildingListProps) {
  return (
    <>
      {filteredBuildings.length ? (
        <StyledBuildingsList>
          {filteredBuildings.map((item: IBuilding) => {
            return <BuildingsCard data={item} key={item.id} />;
          })}
        </StyledBuildingsList>
      ) : (
        <BuildingListEmpty />
      )}
    </>
  );
}

export default BuildingsList;
