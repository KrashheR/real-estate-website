import CatalogCard from "../catalogCard/catalogCard";
import { CatalogDetails } from "../../../../types/ICatalog";

interface CatalogListProps {
  apartments: Record<string, Record<string, CatalogDetails>>;
  selectedRoomType: string;
}

function CatalogList ({ apartments, selectedRoomType }: CatalogListProps) {
  const roomTypeApartments = apartments[selectedRoomType];

  return (
    <div>
      {roomTypeApartments && Object.entries(roomTypeApartments).map(([apartmentType, details]) => (
        <CatalogCard
          key={apartmentType}
          details={details}
        />
      ))}
    </div>
  );
};

export default CatalogList;