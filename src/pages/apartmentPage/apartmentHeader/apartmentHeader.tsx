import FullSizeImage from '../../../components/ui/fullSizeImage/fullSizeImage';
import Title, { TitleLevel, TitleType } from '../../../components/ui/title/title';
import Container from '../../../components/layouts/container/container';
import { StyledApartmentTitleContainer, StyledApartmentTitle } from './styled';

interface ApartmentHeaderProps {
  bigImage: string;
  bigMobileImage: string;
  title: string;
}

function ApartmentHeader({ bigImage, bigMobileImage, title }: ApartmentHeaderProps) {
  return (
    <StyledApartmentTitleContainer>
      <FullSizeImage imageSrc={bigImage} imageMobileSrc={bigMobileImage}/>
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
