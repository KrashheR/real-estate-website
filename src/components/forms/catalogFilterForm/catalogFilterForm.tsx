import { ChangeEvent } from 'react';
import FormRadio, { FormRadioType } from '../formRadio/formRadio';
import { StyledCatalogFilterForm } from './styled';
import { catalogOptions } from './catalogFormConfig';
import React from 'react';

interface CatalogFilterFormProps {
  setSelectedRoomType: (roomType: string) => void;
  selectedRoomType: string;
}

function CatalogFilterForm({ setSelectedRoomType }: CatalogFilterFormProps) {
  const handleObjectTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRoomType(e.target.value);
  };

  const defaultChecked = '1';

  return (
    <StyledCatalogFilterForm>
      {catalogOptions.map((option) => {
        return (
          <React.Fragment key={option.id}>
            <FormRadio
              id={option.id}
              name={'catalogRadio'}
              value={option.value}
              defaultChecked={defaultChecked === option.value}
              onChange={handleObjectTypeChange}
              radioType={FormRadioType.CATALOG}
              label={option.label}
            />
          </React.Fragment>
        );
      })}
    </StyledCatalogFilterForm>
  );
}

export default CatalogFilterForm;
