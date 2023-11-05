import CatalogCard from "../catalogCard/catalogCard";
import { CatalogDetails } from "../../../../types/ICatalog";
import { StyledCatalogList } from "./styled";

interface CatalogListProps {
  apartments: Record<string, Record<string, CatalogDetails>>;
  selectedRoomType: string;
  onCatalogCardChange: (details: CatalogDetails) => void;
  selectedApartmentId: string | undefined;
}

function CatalogList ({ apartments, selectedRoomType, onCatalogCardChange, selectedApartmentId }: CatalogListProps) {
  const roomTypeApartments = apartments[selectedRoomType];

  return (
    <StyledCatalogList>
      {roomTypeApartments && Object.entries(roomTypeApartments).map(([apartmentType, details]) => (
        <CatalogCard
          key={apartmentType}
          details={details}
          handleCatalogCardChange={() => onCatalogCardChange(details)}
          isSelected={selectedApartmentId === details.id}
        />
      ))}
    </StyledCatalogList>
  );
};

export default CatalogList;