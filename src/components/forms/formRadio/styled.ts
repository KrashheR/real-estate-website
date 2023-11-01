import styled from 'styled-components';

export const StyledFormRadioContainer = styled.span`
  display: flex;
  height: 60px;
  justify-content: space-between;
  width: 370px;
`;

export const StyledFormRadio = styled.input`
  display: none;
  transition: all 0.3s ease;
  &:checked + label {
    background-color: ${(props) => props.theme.colors.colorMainRed};
    color: ${(props) => props.theme.colors.colorLightRed};
  }
`;

export const StyledFormRadioLabel = styled.label`
  display: flex;
  height: 100%;
  width: 84px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0px 15px;
  line-height: 34px;
  border: none;
  border-radius: 25px;
  user-select: none;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  box-shadow: 0px 2px 4px ${(props) => props.theme.colors.boxShadowMain};
  color: ${(props) => props.theme.colors.colorBlack};
  transition: all 0.3s ease;
  text-align: center;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    box-shadow: 0px 2px 8px ${(props) => props.theme.colors.boxShadowHover};
  }
`;
