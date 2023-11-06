import { useState } from 'react';
import CatalogFilterForm from '../../forms/catalogFilterForm/catalogFilterForm';
import CatalogList from './catalogList/catalogList';
import {
  StyledCatalogContainer,
  StyledCatalogSelector,
} from './styled';
import { CatalogDetails } from '../../../types/ICatalog';
import CatalogInfo from './catalogInfo/catalogInfo';

interface CatalogProps {
  apartments: string;
}

function Catalog({ apartments }: CatalogProps) {
  const [selectedRoomType, setSelectedRoomType] = useState<string>('1');
  const [selectedApartment, setSelectedApartment] = useState<CatalogDetails | null>(null);

  const handleCatalogCardChange = (apartmentDetails: CatalogDetails) => {
    setSelectedApartment(apartmentDetails);
  };

  return (
    <StyledCatalogContainer>
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
      </StyledCatalogSelector>
      <CatalogInfo selectedApartment={selectedApartment}/>
    </StyledCatalogContainer>
  );
}

export default Catalog;
