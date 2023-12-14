import styled from 'styled-components';
import { StyledContainer } from '../container/styled';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  height: 60px;
  z-index: 10;
  color: ${(props) => props.theme.colors.colorBlack};
  background-color: ${(props) => props.theme.colors.colorWhite};
  border-bottom: 1px solid ${(props) => props.theme.colors.colorLightRed};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    position: relative;
  }
`;

export const StyledHeaderContainer = styled(StyledContainer)`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
`;