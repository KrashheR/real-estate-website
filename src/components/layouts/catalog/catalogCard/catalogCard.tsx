import { CatalogDetails } from "../../../../types/ICatalog";
import { StyledCatalogCard, StyledCatalogCardImage, StyledCatalogCardSize } from "./styled";

interface CatalogCardProps {
  details: CatalogDetails;
  isSelected: boolean;
  handleCatalogCardChange: () => void;
}

function CatalogCard({ details, isSelected, handleCatalogCardChange }: CatalogCardProps )  {

  return (
    <StyledCatalogCard onClick={handleCatalogCardChange} isSelected={isSelected}>
      <StyledCatalogCardImage src={details.image} alt="План квартиры" />
      <StyledCatalogCardSize> {details.size} м²</StyledCatalogCardSize>
    </StyledCatalogCard>
  );
}

export default CatalogCard;