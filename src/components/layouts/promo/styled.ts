import styled from 'styled-components';
import { StyledContainer } from '../container/styled';

export const StyledPromo = styled.section`
  padding: 40px 0;
  background-color: ${(props) => props.theme.colors.colorLightRed};
`;

export const StyledPromoContainer = styled(StyledContainer)`
  display: grid;
  grid-gap: 40px;
  grid-template-areas:
    'countdown countdown slideshow slideshow'
    'cardA cardB slideshow slideshow';
`;
