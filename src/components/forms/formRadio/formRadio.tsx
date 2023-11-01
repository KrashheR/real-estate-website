import React, { ChangeEvent } from 'react';
import {
  StyledFormRadio,
  StyledFormRadioLabel,
  StyledFormRadioContainer,
} from './styled';

interface RadioOption {
  value: string | number;
  label: string;
  id: string;
}

interface FormRadioProps {
  options: RadioOption[];
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormRadio({ options, name, onChange }: FormRadioProps) {
  return (
    <StyledFormRadioContainer id={`form-${name}`} onChange={onChange}>
      {options.map((option) => (
        <React.Fragment key={option.id}>
          <StyledFormRadio
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
          />
          <StyledFormRadioLabel htmlFor={option.id}>
            {option.label}
          </StyledFormRadioLabel>
        </React.Fragment>
      ))}
    </StyledFormRadioContainer>
  );
}

export default FormRadio;
