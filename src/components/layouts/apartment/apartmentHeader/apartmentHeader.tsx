import FullSizeImage from '../../../ui/fullSizeImage/fullSizeImage';
import Title, { TitleLevel, TitleType } from '../../../ui/title/title';
import Container from '../../container/container';
import { StyledApartmentTitleContainer, StyledApartmentTitle } from './styled';

interface ApartmentHeaderProps {
  bigImage: string;
  title: string;
}

function ApartmentHeader({ bigImage, title }: ApartmentHeaderProps) {
  return (
    <StyledApartmentTitleContainer>
      <FullSizeImage imageSrc={bigImage} />
      <Container>
        <StyledApartmentTitle>
          <Title level={TitleLevel.H1} type={TitleType.APARTMENT}>
            {'ЖК «' + title + '»'}
          </Title>
        </StyledApartmentTitle>
      </Container>
    </StyledApartmentTitleContainer>
  );
}

export default ApartmentHeader;
