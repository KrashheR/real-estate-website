import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { selectBuildingById } from '../../store/reducers/BuildingSelectors';
import Apartment from '../../components/layouts/apartment/apartment';
import Title, { TitleLevel, TitleType } from '../../components/ui/title/title';
import Apartments from '../../components/layouts/apartments/apartments';
import { StyledApartmentsContainer } from './styled';

function ApartmentsPage() {
  let { id } = useParams<{ id: string }>();

  const card = useAppSelector((state) =>
    selectBuildingById(state, id as string),
  );

  if (card) {
    return <Apartment data={card} />;
  }

  return (
    <StyledApartmentsContainer>
      <Title level={TitleLevel.H1} type={TitleType.PAGETITLE}>
        Каталог новостроек:
      </Title>
      <Apartments />
    </StyledApartmentsContainer>
  );
}

export default ApartmentsPage;
