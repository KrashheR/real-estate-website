import React from 'react';
import {
  StyledFormRadio,
  StyledFormRadioLabel,
  StyledFormRadioContainer,
} from './styled';

function FormRadio() {
  return (
    <StyledFormRadioContainer id="form-object-date">
      <StyledFormRadio type="radio" id="radio-already" name="form-radio" />
      <StyledFormRadioLabel htmlFor="radio-already">
        Заселён
      </StyledFormRadioLabel>
      <StyledFormRadio type="radio" id="radio-2023" name="form-radio" />
      <StyledFormRadioLabel htmlFor="radio-2023">2023</StyledFormRadioLabel>
      <StyledFormRadio type="radio" id="radio-2024" name="form-radio" />
      <StyledFormRadioLabel htmlFor="radio-2024">2024</StyledFormRadioLabel>
      <StyledFormRadio type="radio" id="radio-2025" name="form-radio" />
      <StyledFormRadioLabel htmlFor="radio-2025">2025</StyledFormRadioLabel>
    </StyledFormRadioContainer>
  );
}

export default FormRadio;
