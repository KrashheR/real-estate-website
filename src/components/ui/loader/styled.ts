import styled, { keyframes } from 'styled-components';

const loadingAnim = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.span`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 5px solid ${(props) => props.theme.colors.colorWhite};
  border-bottom-color: ${(props) => props.theme.colors.colorMainRed};
  border-radius: 50%;
  animation: ${loadingAnim} 1s linear infinite;
`;
