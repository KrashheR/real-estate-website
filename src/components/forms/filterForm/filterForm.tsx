import React from 'react';
import {
  StyledFilterForm,
  StyledFormLabel,
  StyledFormItem,
} from './styled';
import FormSelect from './formSelect/formSelect';
import FormRange from './formRange/formRange';
import FormRadio from './formRadio/formRadio';

function FilterForm() {
  return (
    <StyledFilterForm>
      <StyledFormItem>
        <StyledFormLabel htmlFor="form-object-type">
          Тип объекта
        </StyledFormLabel>
        <FormSelect id="form-object-type" />
      </StyledFormItem>
      <StyledFormItem>
        <StyledFormLabel htmlFor="form-object-price">
          Стоимость объекта, млн. руб.
        </StyledFormLabel>
        <FormRange id="form-object-price"/>
      </StyledFormItem>
      <StyledFormItem>
        <StyledFormLabel htmlFor="form-object-date">
          Сдача объекта
        </StyledFormLabel>
        <FormRadio />
      </StyledFormItem>
    </StyledFilterForm>
  );
}

export default FilterForm;
