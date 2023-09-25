import styled from "styled-components";

export const StyledFormSelect = styled.select`
  overflow: hidden;
  height: 60px;
  width: 340px;
  border: none;
  border-radius: 15px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.colorBlack};
  background-color: ${(props) => props.theme.colors.colorLightRed};
  transition: all 0.3s ease;
  cursor: pointer;
  -webkit-appearance: button;
  appearance: button;
  outline: none;

  &:hover{

  }
`;

export const StyledFormSelectOption = styled.option`
  padding: 10px;
  outline: none;
  border: none;
`;