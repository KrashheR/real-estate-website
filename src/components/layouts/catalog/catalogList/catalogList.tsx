import CatalogCard from "../catalogCard/catalogCard";
import { StyledCatalogList } from "./styled";
import { ApartmentType } from "../../../../types/ICard";

interface CatalogListProps {
  apartments: Record<string, Record<string, ApartmentType>>;
  selectedRoomType: string;
  onCatalogCardChange: (details: ApartmentType) => void;
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