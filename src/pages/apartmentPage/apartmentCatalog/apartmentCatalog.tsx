import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../components/ui/title/title';
import Catalog from '../../../components/layouts/catalog/catalog';
import { StyledApartmentCatalog, StyledCatalogContainer } from './styled';

interface ApartmentCatalogProps {
  apartments: string;
}

function ApartmentCatalog({ apartments }: ApartmentCatalogProps) {
  return (
    <StyledApartmentCatalog>
      <StyledCatalogContainer>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.XL}
          weight={TitleWeight.BOLD}
        >
          Выберите квартиру
        </Title>
        <Catalog apartments={apartments} />
      </StyledCatalogContainer>
    </StyledApartmentCatalog>
  );
}

export default ApartmentCatalog;
