import { IRoomSlides } from '../../../types/IBuilding';
import Showroom from '../../../components/ui/showroom/showroom';
import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../components/ui/title/title';
import Container from '../../../components/layouts/container/container';
import { StyledApartmentShowroom } from './styled';

interface ApartmentShowroomProps {
  rooms: IRoomSlides[];
}

function ApartmentShowroom({ rooms }: ApartmentShowroomProps) {
  return (
    <Container>
      <StyledApartmentShowroom>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.XL}
          weight={TitleWeight.BOLD}
        >
          Отделка квартиры
        </Title>
        <Showroom slides={rooms} />
      </StyledApartmentShowroom>
    </Container>
  );
}

export default ApartmentShowroom;
