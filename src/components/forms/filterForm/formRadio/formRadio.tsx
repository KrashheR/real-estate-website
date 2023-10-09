import React, { ChangeEvent } from 'react';
import {
  StyledFormRadio,
  StyledFormRadioLabel,
  StyledFormRadioContainer,
} from './styled';

interface FormRadioProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormRadio({ onChange }: FormRadioProps) {
  return (
    <StyledFormRadioContainer id="form-object-date" onChange={onChange}>
      <StyledFormRadio type="radio" id="radio-already" name="form-radio" value="0"/>
      <StyledFormRadioLabel htmlFor="radio-already">
        Заселён
      </StyledFormRadioLabel>
      <StyledFormRadio type="radio" id="radio-2023" name="form-radio" value="2023"/>
      <StyledFormRadioLabel htmlFor="radio-2023">2023</StyledFormRadioLabel>
      <StyledFormRadio type="radio" id="radio-2024" name="form-radio" value="2024"/>
      <StyledFormRadioLabel htmlFor="radio-2024">2024</StyledFormRadioLabel>
      <StyledFormRadio type="radio" id="radio-2025" name="form-radio" value="2025"/>
      <StyledFormRadioLabel htmlFor="radio-2025">2025</StyledFormRadioLabel>
    </StyledFormRadioContainer>
  );
}

export default FormRadio;
