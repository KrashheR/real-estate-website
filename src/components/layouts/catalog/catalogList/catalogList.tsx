import CatalogCard from "../catalogCard/catalogCard";
import { CatalogDetails } from "../../../../types/ICatalog";
import { StyledCatalogList } from "./styled";

interface CatalogListProps {
  apartments: Record<string, Record<string, CatalogDetails>>;
  selectedRoomType: string;
}

function CatalogList ({ apartments, selectedRoomType }: CatalogListProps) {
  const roomTypeApartments = apartments[selectedRoomType];

  return (
    <StyledCatalogList>
      {roomTypeApartments && Object.entries(roomTypeApartments).map(([apartmentType, details]) => (
        <CatalogCard
          key={apartmentType}
          details={details}
        />
      ))}
    </StyledCatalogList>
  );
};

export default CatalogList;