import styled from "styled-components";

export const StyledFormRange = styled.div`
  display: flex;
  height: 60px;
  width: 370px;
  border-radius: 25px;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  box-shadow: 0px 2px 4px ${(props) => props.theme.colors.boxShadowMain};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 2px 8px ${(props) => props.theme.colors.boxShadowHover};
  }
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
  width: 80px;
  height: 100%;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  padding-left: 5px;
  color: ${(props) => props.theme.colors.colorBlack};
`;