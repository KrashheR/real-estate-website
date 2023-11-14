import Title, { TitleLevel, TitleType } from '../../../../ui/title/title';
import {
  StyledApartmentDocumentsCard,
  StyledApartmentDocumentsCardDownloadText,
  StyledApartmentDocumentsCardFooter,
  StyledApartmentDocumentsCardImage,
} from './styled';

interface DocumentCardProps {
  title: string;
  downloadText: string;
  imageSrc: string;
  downloadLink: string;
}

function ApartmentDocumentsCard({
  title,
  downloadLink,
  downloadText,
  imageSrc,
}: DocumentCardProps) {
  return (
    <StyledApartmentDocumentsCard href={downloadLink}>
      <Title level={TitleLevel.H3} type={TitleType.DOCUMENTSCARD}>
        {title}
      </Title>
      <StyledApartmentDocumentsCardFooter>
        <StyledApartmentDocumentsCardDownloadText>
          {downloadText}
        </StyledApartmentDocumentsCardDownloadText>
        <StyledApartmentDocumentsCardImage src={imageSrc} />
      </StyledApartmentDocumentsCardFooter>
    </StyledApartmentDocumentsCard>
  );
}

export default ApartmentDocumentsCard;
