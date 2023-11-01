import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { selectCardByTitle } from '../../store/reducers/Selectors';
import Apartment from '../../components/layouts/apartment/apartment';
import Title, { TitleLevel, TitleType } from '../../components/ui/title/title';
import Apartments from '../../components/layouts/apartments/apartments';
import { StyledApartmentsContainer } from './styled';

function ApartmentsPage() {
  let { title } = useParams<{ title: string }>();
  const card = useAppSelector((state) =>
    selectCardByTitle(state, title as string),
  );

  if (card) {
    return <Apartment data={card} />;
  }

  return (
    <StyledApartmentsContainer>
      <Title level={TitleLevel.H1} type={TitleType.APARTMENTMAP}>
        Каталог новостроек:
      </Title>
      <Apartments />
    </StyledApartmentsContainer>
  );
}

export default ApartmentsPage;
