import CatalogCard from "../catalogCard/catalogCard";
import { StyledCatalogList, StyledCatalogNoOptionsMessage } from "./styled";
import { IApartmentData } from "../../../../types/IBuilding";

interface CatalogListProps {
  apartments: IApartmentData[];
  selectedRoomType: string;
  onCatalogCardChange: (details: IApartmentData) => void;
  selectedApartmentId: string | undefined;
}

function CatalogList ({ apartments, selectedRoomType, onCatalogCardChange, selectedApartmentId }: CatalogListProps) {
  let filteredItems = [];

  filteredItems = apartments.filter(apartment => apartment.roomNum === selectedRoomType);

  return (
    <StyledCatalogList>
      {filteredItems.length > 0 ? (
        filteredItems.map(item => (
          <CatalogCard
            key={item.id}
            details={item}
            handleCatalogCardChange={() => onCatalogCardChange(item)}
            isSelected={selectedApartmentId === item.id}
          />
        ))
      ) : (
        <StyledCatalogNoOptionsMessage>Нет свободных вариантов</StyledCatalogNoOptionsMessage>
      )}
    </StyledCatalogList>
  );
};

export default CatalogList;