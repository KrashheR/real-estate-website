import styled from 'styled-components';

export const StyledFormCheckboxContainer = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const StyledFormCheckbox = styled.input`
  display: none;
  transition: all 0.3s ease;
  &:checked + label {
    background-color: ${(props) => props.theme.colors.colorMainRed};
    color: ${(props) => props.theme.colors.colorLightRed};
  }
`;

export const StyledFormCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  height: 60px;
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
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 8px ${(props) => props.theme.colors.boxShadowHover};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    min-width: 40px;
    padding: 0 10px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    min-width: 90px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    min-width: 70px;
    height: 50px;
    font-size: 14px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    min-width: 50px;
  }
`;
