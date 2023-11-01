import { ChangeEvent } from 'react';
import { StyledFormSelect, StyledFormSelectOption } from './styled';

interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  id: string;
  options: SelectOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function FormSelect({ id, options, onChange }: FormSelectProps) {
  return (
    <StyledFormSelect id={id} onChange={onChange}>
      {options.map((option, index) => (
        <StyledFormSelectOption key={index} value={option.value}>
          {option.label}
        </StyledFormSelectOption>
      ))}
    </StyledFormSelect>
  );
}

export default FormSelect;
