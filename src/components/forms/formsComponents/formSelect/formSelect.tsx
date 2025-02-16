import { ChangeEvent } from 'react';
import { StyledFormSelect, StyledFormSelectOption } from './styled';

interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  id: string;
  options: Array<{ value: string; label: string }>;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

function FormSelect({ id, options, onChange, value }: FormSelectProps) {
  return (
    <StyledFormSelect id={id} onChange={onChange} value={value}>
      {options.map((option, index) => (
        <StyledFormSelectOption key={option + '-' + index} value={option.value}>
          {option.label}
        </StyledFormSelectOption>
      ))}
    </StyledFormSelect>
  );
}

export default FormSelect;
