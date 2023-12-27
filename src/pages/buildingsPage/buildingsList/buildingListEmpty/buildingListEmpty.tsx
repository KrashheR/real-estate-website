import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../../components/ui/title/title';
import { StyledBuildingsListEmpty } from './styled';

function BuildingListEmpty() {
  return (
    <StyledBuildingsListEmpty>
      <Title
        level={TitleLevel.H3}
        size={TitleSize.S}
        weight={TitleWeight.NORMAL}
      >
        Нет квартир, соответствующих вашим фильтрам
      </Title>
    </StyledBuildingsListEmpty>
  );
}

export default BuildingListEmpty;
