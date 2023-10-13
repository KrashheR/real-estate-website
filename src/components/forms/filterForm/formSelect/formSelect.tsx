import React, { ChangeEvent } from 'react';
import { StyledFormSelect, StyledFormSelectOption } from './styled';

interface FormSelectProps {
  id: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function FormSelect({ id, onChange }: FormSelectProps) {
  return (
    <StyledFormSelect id={id} onChange={onChange}>
      <StyledFormSelectOption>Все объекты</StyledFormSelectOption>
      <StyledFormSelectOption>Однокомнатная квартира</StyledFormSelectOption>
      <StyledFormSelectOption>Двухкомнатная квартира</StyledFormSelectOption>
      <StyledFormSelectOption>Трёхкомнатная квартира</StyledFormSelectOption>
      <StyledFormSelectOption>Машиноместо</StyledFormSelectOption>
    </StyledFormSelect>
  );
}

export default FormSelect;
