import { ICard } from '../../../types/ICard';
import Description, { DescriptionType } from '../../ui/description/description';
import FullSizeImage from '../../ui/fullSizeImage/fullSizeImage';
import Title, { TitleLevel, TitleType } from '../../ui/title/title';
import Container from '../container/container';
import ApartmentFeature, { FeatureType } from './apartmentFeature/apartmentFeature';
import {
  StyledApartment,
  StyledApartmentAbout,
  StyledApartmentFeatures,
  StyledApartmentImg,
  StyledApartmentText,
  StyledApartmentTitle,
  StyledApartmentTitleContainer,
} from './styled';

interface ApartmentFeature {
  type: FeatureType;
  description: string;
  id: string;
}

function Apartment({ data }: { data: ICard }) {
  const apartmentDescription = data.description.split('<br>');
  const apartmentFeatures = JSON.parse(data.features);

  return (
    <StyledApartment>
      <StyledApartmentTitleContainer>
        <FullSizeImage imageSrc={data.bigImage} />
        <Container>
          <StyledApartmentTitle>
            <Title level={TitleLevel.H1} type={TitleType.APARTMENT}>
              {"ЖК «" + data.title + "»"}
            </Title>
          </StyledApartmentTitle>
        </Container>
      </StyledApartmentTitleContainer>
      <Container>
        <Title level={TitleLevel.H2} type={TitleType.APARTMENT}>
          О проекте
        </Title>
        <StyledApartmentAbout>
          <StyledApartmentText>
            {apartmentDescription.map((item, index) => {
              const key = `${index}-${item.substring(0,5)}`;
              return <Description type={DescriptionType.APARTMENT} key={key}>{item}</Description>;
            })}
          </StyledApartmentText>
          <StyledApartmentImg src={data.image} />
        </StyledApartmentAbout>
        <StyledApartmentFeatures>
          {apartmentFeatures.map((item:ApartmentFeature) => {
            return<ApartmentFeature type={item.type} descriptionText={item.description} key={item.id}/>
          })}
        </StyledApartmentFeatures>
      </Container>
    </StyledApartment>
  );
}

export default Apartment;
