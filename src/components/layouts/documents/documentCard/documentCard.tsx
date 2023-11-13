import Title, { TitleLevel, TitleType } from '../../../ui/title/title';
import { StyledDocumentsCard, StyledDocumentsCardDownloadText, StyledDocumentsCardFooter, StyledDocumentsCardImage} from './styled';

interface DocumentCardProps {
  title: string;
  downloadText: string;
  imageSrc: string;
  downloadLink: string;
}

function DocumentCard({ title, downloadLink, downloadText, imageSrc }: DocumentCardProps) {
  return (
    <StyledDocumentsCard href={downloadLink}>
      <Title level={TitleLevel.H3} type={TitleType.DOCUMENTSCARD}>
        {title}
      </Title>
      <StyledDocumentsCardFooter>
        <StyledDocumentsCardDownloadText>{downloadText}</StyledDocumentsCardDownloadText>
        <StyledDocumentsCardImage src={imageSrc}/>
      </StyledDocumentsCardFooter>
    </StyledDocumentsCard>
  );
}

export default DocumentCard;
