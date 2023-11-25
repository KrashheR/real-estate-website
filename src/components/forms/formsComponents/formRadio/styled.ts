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
  min-width: ${(props) => {
    if (props.$formRadioType === FormRadioType.CATALOG) {
      return '55px';
    } else if (props.$formRadioType === FormRadioType.APARTMENT) {
      return '80px';
    } else if (props.$formRadioType === FormRadioType.CONSTRUCTOR) {
      return '450px';
    }
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
      if (props.$formRadioType === FormRadioType.CATALOG) {
        return '55px';
      } else if (props.$formRadioType === FormRadioType.APARTMENT) {
        return '50px';
      } else if (props.$formRadioType === FormRadioType.CONSTRUCTOR) {
        return '45vw';
      }
    }};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    min-width: ${(props) => {
      if (props.$formRadioType === FormRadioType.CATALOG) {
        return '55px';
      } else if (props.$formRadioType === FormRadioType.APARTMENT) {
        return '90px';
      } else if (props.$formRadioType === FormRadioType.CONSTRUCTOR) {
        return '40vw';
      }
    }};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    min-width: ${(props) => {
      if (props.$formRadioType === FormRadioType.CATALOG) {
        return '55px';
      } else if (props.$formRadioType === FormRadioType.APARTMENT) {
        return '70px';
      } else if (props.$formRadioType === FormRadioType.CONSTRUCTOR) {
        return '90vw';
      }
    }};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    min-width: ${(props) => {
      if (props.$formRadioType === FormRadioType.CATALOG) {
        return '55px';
      } else if (props.$formRadioType === FormRadioType.APARTMENT) {
        return '50px';
      } else if (props.$formRadioType === FormRadioType.CONSTRUCTOR) {
        return '90vw';
      }
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
