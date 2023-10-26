import Title, { TitleLevel, TitleType } from "../../ui/title/title";
import Projects from "../projects/projects";
import { StyledCatalogContainer } from "./styled";

function Catalog() {
  return(
    <StyledCatalogContainer>
      <Title level={TitleLevel.H1} type={TitleType.APARTMENTMAP}>
        Каталог новостроек:
      </Title>
      <Projects />
  </StyledCatalogContainer>
  );
}

export default Catalog;