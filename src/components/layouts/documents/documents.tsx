import Description, { DescriptionType } from '../../ui/description/description';
import Title, { TitleType, TitleLevel } from '../../ui/title/title';
import DocumentCard from './documentCard/documentCard';
import { StyledDocuments, StyledDocumentsCards, StyledDocumentsHeader } from './styled';

function Documents() {
  return (
    <StyledDocuments>
      <StyledDocumentsHeader>
        <Title level={TitleLevel.H2} type={TitleType.APARTMENT}>
          Документы проекта
        </Title>
        <Description type={DescriptionType.APARTMENT}>
          Все документы находятся в открытом доступе. Здесь вы можете
          ознакомиться со всеми необходимыми документами по проекту.
        </Description>
      </StyledDocumentsHeader>
      <StyledDocumentsCards>
        <DocumentCard title={"Документы по проекту"} linkText={"Скачать документы"}/>
        <DocumentCard title={"Гид по проекту"} linkText={"Скачать гида"}/>
      </StyledDocumentsCards>
    </StyledDocuments>
  );
}

export default Documents;
