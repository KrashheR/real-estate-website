import styled from "styled-components";

export const StyledFormSelect = styled.select`
  overflow: hidden;
  height: 60px;
  width: 340px;
  border: none;
  border-radius: 15px;
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.colorBlack};
  background-color: ${(props) => props.theme.colors.colorLightRed};
  transition: all 0.3s ease;
  cursor: pointer;
  appearance: button;
  outline: none;

  &:hover{
    border-radius: 30px;
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.colorMainRed};
  }
`;

export const StyledFormSelectOption = styled.option`
  padding: 10px;
  outline: none;
  border: none;
`;