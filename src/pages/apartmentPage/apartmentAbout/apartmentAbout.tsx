import Description, {
  DescriptionSize,
} from '../../../components/ui/description/description';
import Title, { TitleLevel, TitleSize, TitleWeight} from '../../../components/ui/title/title';
import Container from '../../../components/layouts/container/container';
import {
  StyledApartmentAbout,
  StyledApartmentAboutPicture,
  StyledApartmentAboutInfo,
  StyledApartmentAboutText,
  StyledApartmentAboutImage,
} from './styled';

interface ApartmentAboutProps {
  apartmentDescription: string[];
  apartmentImage: string;
  apartmentImageMobile: string;
}

function ApartmentAbout({
  apartmentDescription,
  apartmentImage,
  apartmentImageMobile,
}: ApartmentAboutProps) {
  return (
    <Container>
      <StyledApartmentAbout>
      <Title
        level={TitleLevel.H2}
        size={TitleSize.XL}
        weight={TitleWeight.BOLD}
      >
          О проекте
        </Title>
        <StyledApartmentAboutInfo>
          <StyledApartmentAboutText>
            {apartmentDescription.map((item, index) => {
              const key = `${index}-${item.substring(0, 5)}`;
              return (
                <Description size={DescriptionSize.S} key={key}>
                  {item}
                </Description>
              );
            })}
          </StyledApartmentAboutText>
          <StyledApartmentAboutPicture>
            <source srcSet={apartmentImageMobile} media='(max-width: 576px)'/>
            <StyledApartmentAboutImage src={apartmentImage}/>
          </StyledApartmentAboutPicture>
        </StyledApartmentAboutInfo>
      </StyledApartmentAbout>
    </Container>
  );
}

export default ApartmentAbout;
