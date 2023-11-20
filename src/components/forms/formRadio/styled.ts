import styled from 'styled-components';
import { FormRadioType } from './formRadio';

type StyledFormRadioProps = {
  $formRadioType: FormRadioType;
};

export const StyledFormRadioContainer = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const StyledFormRadio = styled.input`
  display: none;
  transition: all 0.3s ease;
  &:checked + label {
    background-color: ${(props) => props.theme.colors.colorMainRed};
    color: ${(props) => props.theme.colors.colorLightRed};
  }
`;

export const StyledFormRadioLabel = styled.label<StyledFormRadioProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: ${(props) => {
    return props.$formRadioType === FormRadioType.CATALOG ? '55px' : '80px';
  }};
  height: ${(props) => {
    return props.$formRadioType === FormRadioType.CATALOG ? '55px' : '60px';
  }};
  padding: 0px 15px;
  line-height: 34px;
  border: none;
  border-radius: ${(props) => {
    return props.$formRadioType === FormRadioType.CATALOG ? '30px' : '25px';
  }};
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
    min-width: ${(props) => {
      return props.$formRadioType === FormRadioType.CATALOG ? '55px' : '50px';
    }};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    min-width: ${(props) => {
      return props.$formRadioType === FormRadioType.CATALOG ? '55px' : '90px';
    }};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    min-width: ${(props) => {
      return props.$formRadioType === FormRadioType.CATALOG ? '55px' : '70px';
    }};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    min-width: ${(props) => {
      return props.$formRadioType === FormRadioType.CATALOG ? '55px' : '50px';
    }};
    padding: ${(props) => {
      return props.$formRadioType === FormRadioType.CATALOG
        ? '0px 15px'
        : '0px 10px';
    }};
    height: ${(props) => {
      return props.$formRadioType === FormRadioType.CATALOG ? '55px' : '60px';
    }};
    font-size: 14px;
  }
`;
