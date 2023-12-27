import { useAppSelector } from '../../../../hooks/redux';
import { selectFilteredBuildings } from '../../../../store/reducers/buildings/buildingSelectors';
import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../ui/title/title';
import { StyledConstructorResult } from './styled';
import BuildingsList from '../../../../pages/buildingsPage/buildingsList/buildingsList';

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
      <BuildingsList filteredBuildings={filteredBuildings} />
    </StyledConstructorResult>
  );
}

export default ConstructorResult;
