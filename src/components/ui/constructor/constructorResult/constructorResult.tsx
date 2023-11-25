import { useAppSelector } from '../../../../hooks/redux';
import { selectFilteredBuildings } from '../../../../store/reducers/buildings/BuildingSelectors';
import BuildingsCard from '../../../../pages/buildingsPage/buildingsCard/buildingsCard';
import Title, { TitleLevel, TitleType } from '../../title/title';
import { StyledConstructorResult, StyledConstructorResultEmpty, StyledConstructorResultList } from './styled';

interface ConstructorResultProps {
  isActive: boolean;
}

function ConstructorResult({ isActive }: ConstructorResultProps) {
  const filteredBuildings = useAppSelector(selectFilteredBuildings);

  return (
    <StyledConstructorResult isActive={isActive}>
      <Title level={TitleLevel.H2} type={TitleType.CONSTRUCTOR}>
        Вам подходят эти дома
      </Title>
      <StyledConstructorResultList>
        {filteredBuildings.map((item) => {
          return <BuildingsCard data={item} key={item.id} />;
        })}
      </StyledConstructorResultList>
      {filteredBuildings.length === 0 && (
        <StyledConstructorResultEmpty>Нет квартир, соответствующих вашим фильтрам.</StyledConstructorResultEmpty>
      )}
    </StyledConstructorResult>
  );
}

export default ConstructorResult;
