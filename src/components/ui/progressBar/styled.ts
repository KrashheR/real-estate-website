import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  border-radius: 8px;
`;

export const ProgressBarFiller = styled.div<{ width: number }>`
  height: 10px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.colorMainRed};
  width: ${props => props.width}%;
  transition: width 0.3s ease-in-out;
`;

export const ProgressText = styled.p`
  position: absolute;
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
`;