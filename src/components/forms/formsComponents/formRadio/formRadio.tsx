import { ChangeEvent } from 'react';
import {
  StyledFormRadio,
  StyledFormRadioLabel,
  StyledFormRadioContainer,
} from './styled';

interface FormRadioProps {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  radioType: FormRadioType;
  id:string;
  label:string;
  value:string | number;
}

export enum FormRadioType {
  CATALOG = "catalog",
  BUILDING = "apartment",
  CONSTRUCTOR = "constructor",
}

function FormRadio({ name, onChange, defaultChecked, id, value, label, radioType }: FormRadioProps) {
  return (
    <StyledFormRadioContainer id={`form-${name}`} onChange={onChange}>
      <StyledFormRadio
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
      <StyledFormRadioLabel $formRadioType={radioType} htmlFor={id}>
        {label}
      </StyledFormRadioLabel>
    </StyledFormRadioContainer>
  );
}

export default FormRadio;
