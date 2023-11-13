import Description, { DescriptionType } from '../../ui/description/description';
import Title, { TitleType, TitleLevel } from '../../ui/title/title';
import DocumentCard from './documentCard/documentCard';
import { StyledDocuments, StyledDocumentsCards, StyledDocumentsHeader } from './styled';
import downloadImg from "../../../assets/images/documents/download.svg";
import { DocumentsData } from '../../../types/ICard';

interface DocumentsProps {
  documents : string;
}

function Documents({documents}:DocumentsProps) {
  const documentsData : DocumentsData[] = JSON.parse(documents);

  return (
    <StyledDocuments>
      <StyledDocumentsHeader>
        <Title level={TitleLevel.H2} type={TitleType.APARTMENTSECTION}>
          Документы проекта
        </Title>
        <Description type={DescriptionType.DOCUMENTS}>
          Все документы находятся в открытом доступе. Здесь вы можете
          ознакомиться со всеми необходимыми документами по проекту.
        </Description>
      </StyledDocumentsHeader>
      <StyledDocumentsCards>
        {documentsData.map((item) => {
          return(
            <DocumentCard title={item.title} downloadLink={item.downloadLink} downloadText={item.downloadText} imageSrc={downloadImg} key={item.documentId}/>
          );
        })}
      </StyledDocumentsCards>
    </StyledDocuments>
  );
}

export default Documents;
