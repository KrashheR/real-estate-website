import styled from 'styled-components';

export const StyledFormRadioContainer = styled.span`
  display: flex;
  height: 60px;
  gap: 10px;
`;

export const StyledFormRadio = styled.input`
  display: none;

  &:checked + label {
    background-color: ${(props) => props.theme.colors.colorMainRed};
    color: ${(props) => props.theme.colors.colorLightRed};
  }
`;

export const StyledFormRadioLabel = styled.label`
  display: flex;
  height: 100%;
  width: 100px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0px 15px;
  line-height: 34px;
  border: none;
  border-radius: 15px;
  user-select: none;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  color: ${(props) => props.theme.colors.colorBlack};
  transition: all 0.3s ease;
  text-align: center;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    border-radius: 40px;
  }
`;
