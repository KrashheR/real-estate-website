import { CatalogDetails } from "../../../../types/ICatalog";
import { StyledCatalogCard, StyledCatalogCardImage, StyledCatalogCardSize } from "./styled";

interface CatalogCardProps {
  details: CatalogDetails;
}

function CatalogCard({ details }: CatalogCardProps) {
  return (
    <StyledCatalogCard>
      <StyledCatalogCardImage src={details.image} alt="План квартиры" />
      <StyledCatalogCardSize> {details.size} м²</StyledCatalogCardSize>
    </StyledCatalogCard>
  );
}

export default CatalogCard;