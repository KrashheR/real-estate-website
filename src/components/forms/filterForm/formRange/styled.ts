import styled from "styled-components";

export const StyledFormRange = styled.div`
  display: flex;
  height: 60px;
  width: 340px;
  border: none;
  border-radius: 15px;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.colorLightRed};
`;

export const StyledFormRangeContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  font-size: 16px;
  gap: 4px;
`;

export const StyledFormRangeInput = styled.input`
  width: 60px;
  height: 100%;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.colorBlack};
`;