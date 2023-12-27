import { ChangeEvent } from 'react';
import {
  StyledFormCheckbox,
  StyledFormCheckboxLabel,
  StyledFormCheckboxContainer,
} from './styled';

interface FormCheckboxProps {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  id: string;
  label: string;
  value: string | number;
}

function FormCheckbox({
  name,
  onChange,
  defaultChecked,
  id,
  value,
  label,
}: FormCheckboxProps) {
  return (
    <StyledFormCheckboxContainer id={`form-${name}`} onChange={onChange}>
      <StyledFormCheckbox
        type="checkbox"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
      <StyledFormCheckboxLabel htmlFor={id}>{label}</StyledFormCheckboxLabel>
    </StyledFormCheckboxContainer>
  );
}

export default FormCheckbox;
