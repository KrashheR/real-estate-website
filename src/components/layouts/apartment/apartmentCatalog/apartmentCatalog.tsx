import Title, { TitleLevel, TitleType } from "../../../ui/title/title";
import Catalog from "../../catalog/catalog";
import { StyledApartmentCatalog, StyledCatalogContainer } from "./styled";

interface ApartmentCatalogProps {
  apartments: string;
}

function ApartmentCatalog({apartments}: ApartmentCatalogProps) {

  return(
    <StyledApartmentCatalog>
    <StyledCatalogContainer>
      <Title level={TitleLevel.H2} type={TitleType.APARTMENTSECTION}>
        Выберите квартиру
      </Title>
      <Catalog apartments={apartments} />
    </StyledCatalogContainer>
  </StyledApartmentCatalog>
  );
}

export default ApartmentCatalog;