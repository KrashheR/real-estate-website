import { IApartmentDocumentsData } from '../../../types/IBuilding';
import Description, {
  DescriptionType,
} from '../../../components/ui/description/description';
import Title, { TitleLevel, TitleType } from '../../../components/ui/title/title';
import Container from '../../../components/layouts/container/container';
import ApartmentDocumentsCard from './apartmentDocumentsCard/apartmentDocumentsCard';
import {
  StyledApartmentDocuments,
  StyledApartmentDocumentsCards,
  StyledApartmentDocumentsHeader,
} from './styled';

interface ApartmentDocumentsProps {
  documents: string;
}

function ApartmentDocuments({ documents }: ApartmentDocumentsProps) {
  const documentsData: IApartmentDocumentsData[] = JSON.parse(documents);

  return (
    <Container>
      <StyledApartmentDocuments>
        <StyledApartmentDocumentsHeader>
          <Title level={TitleLevel.H2} type={TitleType.APARTMENTSECTION}>
            Документы проекта
          </Title>
          <Description type={DescriptionType.DOCUMENTS}>
            Все документы находятся в открытом доступе. Здесь вы можете
            ознакомиться со всеми необходимыми документами по проекту.
          </Description>
        </StyledApartmentDocumentsHeader>
        <StyledApartmentDocumentsCards>
          {documentsData.map((item) => {
            return (
              <ApartmentDocumentsCard
                title={item.title}
                downloadLink={item.downloadLink}
                downloadText={item.downloadText}
                imageSrc={item.imageSrc}
                key={item.documentId}
              />
            );
          })}
        </StyledApartmentDocumentsCards>
      </StyledApartmentDocuments>
    </Container>
  );
}

export default ApartmentDocuments;
