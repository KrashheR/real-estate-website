import { useState } from 'react';
import CatalogFilterForm from '../../forms/catalogFilterForm/catalogFilterForm';
import CatalogList from './catalogList/catalogList';
import {
  StyledCatalogButtonContainer,
  StyledCatalogContent,
  StyledCatalogSelector,
} from './styled';
import CatalogInfo from './catalogInfo/catalogInfo';
import CatalogButton from './catalogButton/catalogButton';
import { ApartmentType } from '../../../types/ICard';

interface CatalogProps {
  apartments: string;
}

function Catalog({ apartments }: CatalogProps) {
  const [selectedRoomType, setSelectedRoomType] = useState<string>('1');
  const [selectedApartment, setSelectedApartment] =
    useState<ApartmentType | null>(null);

  const handleCatalogCardChange = (apartmentDetails: ApartmentType) => {
    setSelectedApartment(apartmentDetails);
  };

  return (
    <StyledCatalogContent>
      <StyledCatalogSelector>
        <CatalogFilterForm
          selectedRoomType={selectedRoomType}
          setSelectedRoomType={setSelectedRoomType}
        />
        <CatalogList
          selectedRoomType={selectedRoomType}
          apartments={JSON.parse(apartments)}
          onCatalogCardChange={handleCatalogCardChange}
          selectedApartmentId={selectedApartment?.id}
        />
        <StyledCatalogButtonContainer>
          <CatalogButton text={'Выбрать эту квартиру'} />
        </StyledCatalogButtonContainer>
      </StyledCatalogSelector>
      <CatalogInfo selectedApartment={selectedApartment} />
    </StyledCatalogContent>
  );
}

export default Catalog;
