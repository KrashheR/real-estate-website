import React from 'react';
import { StyledFilterForm } from './styled';

function FilterForm() {
  return (
    <StyledFilterForm>
      <input type="text" />
      <select>
        <option>Новостройки</option>
        <option>Машиноместа</option>
      </select>
    </StyledFilterForm>
  );
};

export default FilterForm;
