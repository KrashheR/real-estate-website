
import { ApartmentType } from '../../../../types/ICard';
import {
  StyledCatalogInfoApartment,
  StyledCatalogInfoData,
  StyledCatalogInfoItem,
  StyledCatalogInfoLabel,
  StyledCatalogInfoContainer,
  StyledCatalogInfoImg,
  StyledCatalogInfoPlaceholder,
  StyledCatalogInfoPlaceholderTitle,
} from './styled';

interface CatalogInfoProps {
  selectedApartment: ApartmentType | null;
}

function CatalogInfo({ selectedApartment }: CatalogInfoProps) {
  if (selectedApartment) {
    return (
      <StyledCatalogInfoApartment>
        <StyledCatalogInfoImg
          src={selectedApartment.image}
          alt="План квартиры"
        />
        <StyledCatalogInfoContainer>
          <StyledCatalogInfoItem>
            <StyledCatalogInfoLabel>Площадь</StyledCatalogInfoLabel>
            <StyledCatalogInfoData>
              {selectedApartment.size} м²
            </StyledCatalogInfoData>
          </StyledCatalogInfoItem>
          <StyledCatalogInfoItem>
            <StyledCatalogInfoLabel>Этаж</StyledCatalogInfoLabel>
            <StyledCatalogInfoData>{selectedApartment.floor}</StyledCatalogInfoData>
          </StyledCatalogInfoItem>
          <StyledCatalogInfoItem>
            <StyledCatalogInfoLabel>Цена</StyledCatalogInfoLabel>
            <StyledCatalogInfoData>
              {selectedApartment.price * 1000000} ₽
            </StyledCatalogInfoData>
          </StyledCatalogInfoItem>
          <StyledCatalogInfoItem>
            <StyledCatalogInfoLabel>В ипотеку</StyledCatalogInfoLabel>
            <StyledCatalogInfoData>
              от {(selectedApartment.price * 1000 * 12).toFixed(0)} ₽/мес.
            </StyledCatalogInfoData>
          </StyledCatalogInfoItem>
        </StyledCatalogInfoContainer>
      </StyledCatalogInfoApartment>
    );
  }

  return (
    <StyledCatalogInfoPlaceholder><StyledCatalogInfoPlaceholderTitle>Выберите понравившийся план квартиры</StyledCatalogInfoPlaceholderTitle></StyledCatalogInfoPlaceholder>
  );
}

export default CatalogInfo;
