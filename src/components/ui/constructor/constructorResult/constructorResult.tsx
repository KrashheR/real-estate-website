import { useAppSelector } from '../../../../hooks/redux';
import { selectFilteredBuildings } from '../../../../store/reducers/buildings/BuildingSelectors';
import BuildingsCard from '../../../../pages/buildingsPage/buildingsCard/buildingsCard';
import Title, { TitleLevel, TitleSize, TitleWeight } from '../../title/title';
import {
  StyledConstructorResult,
  StyledConstructorResultEmpty,
} from './styled';
import { StyledBuildingsList } from '../../../../pages/buildingsPage/buildingsList/styled';

interface ConstructorResultProps {
  isActive: boolean;
}

function ConstructorResult({ isActive }: ConstructorResultProps) {
  const filteredBuildings = useAppSelector(selectFilteredBuildings);

  return (
    <StyledConstructorResult isActive={isActive}>
      <Title
        level={TitleLevel.H2}
        size={TitleSize.XL}
        weight={TitleWeight.BOLD}
      >
        Вам подходят эти дома
      </Title>
      <StyledBuildingsList>
        {filteredBuildings.length === 0 && (
          <StyledConstructorResultEmpty>
            Нет квартир, соответствующих вашим фильтрам.
          </StyledConstructorResultEmpty>
        )}
        {filteredBuildings.map((item) => {
          return <BuildingsCard data={item} key={item.id} />;
        })}
      </StyledBuildingsList>
    </StyledConstructorResult>
  );
}

export default ConstructorResult;
