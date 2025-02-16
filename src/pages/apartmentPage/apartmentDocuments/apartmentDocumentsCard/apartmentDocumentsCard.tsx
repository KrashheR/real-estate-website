import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../../components/ui/title/title';
import {
  StyledApartmentDocumentsCard,
  StyledApartmentDocumentsCardDownloadText,
  StyledApartmentDocumentsCardFooter,
  StyledApartmentDocumentsCardImage,
} from './styled';
import downloadIcon from '../../../../assets/images/documents/download.svg';

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
    <StyledApartmentDocumentsCard href={downloadLink} target="blank">
      <Title level={TitleLevel.H2} size={TitleSize.L} weight={TitleWeight.BOLD}>
        {title}
      </Title>
      <StyledApartmentDocumentsCardFooter>
        <StyledApartmentDocumentsCardDownloadText>
          {downloadText}
        </StyledApartmentDocumentsCardDownloadText>
        <StyledApartmentDocumentsCardImage
          src={downloadIcon}
          alt="Кнопка скачать"
        />
      </StyledApartmentDocumentsCardFooter>
    </StyledApartmentDocumentsCard>
  );
}

export default ApartmentDocumentsCard;
