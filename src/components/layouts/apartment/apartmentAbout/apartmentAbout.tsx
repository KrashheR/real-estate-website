import Description, {
  DescriptionType,
} from '../../../ui/description/description';
import Title, { TitleLevel, TitleType } from '../../../ui/title/title';
import Container from '../../container/container';
import {
  StyledApartmentAbout,
  StyledApartmentAboutImg,
  StyledApartmentAboutInfo,
  StyledApartmentAboutText,
} from './styled';

interface ApartmentAboutProps {
  apartmentDescription: string[];
  apartmentImage: string;
}

function ApartmentAbout({
  apartmentDescription,
  apartmentImage,
}: ApartmentAboutProps) {
  return (
    <Container>
      <StyledApartmentAbout>
        <Title level={TitleLevel.H2} type={TitleType.APARTMENTSECTION}>
          О проекте
        </Title>
        <StyledApartmentAboutInfo>
          <StyledApartmentAboutText>
            {apartmentDescription.map((item, index) => {
              const key = `${index}-${item.substring(0, 5)}`;
              return (
                <Description type={DescriptionType.APARTMENT} key={key}>
                  {item}
                </Description>
              );
            })}
          </StyledApartmentAboutText>
          <StyledApartmentAboutImg src={apartmentImage} />
        </StyledApartmentAboutInfo>
      </StyledApartmentAbout>
    </Container>
  );
}

export default ApartmentAbout;
