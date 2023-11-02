import { useState } from 'react';
import CatalogFilterForm from '../../forms/catalogFilterForm/catalogFilterForm';
import CatalogList from './catalogList/catalogList';
import {
  StyledCatalogContainer,
  StyledCatalogInfo,
  StyledCatalogSelector,
} from './styled';


interface CatalogProps {
  apartments: string;
}

function Catalog({apartments}: CatalogProps) {
  const [selectedRoomType, setSelectedRoomType] = useState<string>("1");

  return (
    <StyledCatalogContainer>
      <StyledCatalogSelector>
        <CatalogFilterForm onRoomTypeChange={setSelectedRoomType} />
        <CatalogList selectedRoomType={selectedRoomType} apartments={JSON.parse(apartments)}/>
      </StyledCatalogSelector>
      <StyledCatalogInfo></StyledCatalogInfo>
    </StyledCatalogContainer>
  );
}

export default Catalog;
