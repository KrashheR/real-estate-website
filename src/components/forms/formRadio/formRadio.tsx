import React, { ChangeEvent } from 'react';
import {
  StyledFormRadio,
  StyledFormRadioLabel,
  StyledFormRadioContainer,
} from './styled';

interface RadioOption {
  value: string;
  label: string;
  id: string;
}

interface FormRadioProps {
  options: RadioOption[];
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: string | null;
  type: FormRadioType;
}

export enum FormRadioType {
  CATALOG = "catalog",
  APARTMENT = "apartment",
}

function FormRadio({ options, name, onChange, defaultChecked, type }: FormRadioProps) {
  return (
    <StyledFormRadioContainer id={`form-${name}`} onChange={onChange}>
      {options.map((option) => (
        <React.Fragment key={option.id}>
          <StyledFormRadio
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            defaultChecked={defaultChecked === option.value}
          />
          <StyledFormRadioLabel $formRadioType={type} htmlFor={option.id}>
            {option.label}
          </StyledFormRadioLabel>
        </React.Fragment>
      ))}
    </StyledFormRadioContainer>
  );
}

export default FormRadio;
