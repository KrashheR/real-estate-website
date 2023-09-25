import React from 'react';
import {
  StyledFormRange,
  StyledFormRangeInput,
  StyledFormRangeContainer,
} from './styled';

interface FormRangeProps {
  id: string;
}

function FormRange({ id }: FormRangeProps) {
  return (
    <StyledFormRange id={ id }>
      <StyledFormRangeContainer>
        <label htmlFor="price-min">От</label>
        <StyledFormRangeInput
          type="number"
          id="price-min"
          min="1"
          max="100"
          placeholder="0"
        />
      </StyledFormRangeContainer>
      <p>-</p>
      <StyledFormRangeContainer>
        <label htmlFor="price-max">До</label>
        <StyledFormRangeInput
          type="number"
          id="price-max"
          min="1"
          max="100"
          placeholder="100"
        />
      </StyledFormRangeContainer>
    </StyledFormRange>
  );
}

export default FormRange;
