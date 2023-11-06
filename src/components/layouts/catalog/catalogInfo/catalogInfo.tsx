import { CatalogDetails } from "../../../../types/ICatalog";
import { StyledCatalogInfo, StyledCatalogInfoData, StyledCatalogInfoItem, StyledCatalogInfoLabel, StyledCatalogInfoContainer, StyledCatalogInfoImg } from "./styled";

interface CatalogInfoProps {
  selectedApartment: CatalogDetails | null;
}

function CatalogInfo({selectedApartment}: CatalogInfoProps) {

  if(selectedApartment){
    return(
      <StyledCatalogInfo>
          <StyledCatalogInfoImg src={selectedApartment.image} alt="План квартиры" />
          <StyledCatalogInfoContainer>
            <StyledCatalogInfoItem><StyledCatalogInfoLabel>Цена</StyledCatalogInfoLabel><StyledCatalogInfoData>{selectedApartment.price}</StyledCatalogInfoData></StyledCatalogInfoItem>
            <StyledCatalogInfoItem><StyledCatalogInfoLabel>Площадь</StyledCatalogInfoLabel><StyledCatalogInfoData>{selectedApartment.size} м²</StyledCatalogInfoData></StyledCatalogInfoItem>
          </StyledCatalogInfoContainer>
      </StyledCatalogInfo>
    );
  }

  return(
    <StyledCatalogInfo>
      Выберите понравившийся план квартиры
    </StyledCatalogInfo>

  );
}

export default CatalogInfo;