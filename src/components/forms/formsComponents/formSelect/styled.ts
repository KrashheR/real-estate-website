import styled from "styled-components";
import DropdownArrow from "../../../../assets/images/forms/dropdown-arrow.svg"

export const StyledFormSelect = styled.select`
  overflow: hidden;
  height: 60px;
  width: 370px;
  border: 1px solid ${(props) => props.theme.colors.colorLightRed};
  border-radius: 25px;
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.colorBlack};
  background-image: url(${DropdownArrow});
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 25px;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  box-shadow: 0px 2px 4px ${(props) => props.theme.colors.boxShadowMain};
  transition: all 0.3s ease;
  cursor: pointer;
  appearance: none;
  outline: none;

  &:hover {
    box-shadow: 0px 2px 8px ${(props) => props.theme.colors.boxShadowHover};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    width: 28vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 80vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 50px;
    font-size: 14px;
    padding: 10px 20px;
  }
`;

export const StyledFormSelectOption = styled.option`
  padding: 10px 20px;
  outline: none;
  border: none;
`;
