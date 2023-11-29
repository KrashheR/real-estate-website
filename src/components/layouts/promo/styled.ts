import styled from 'styled-components';
import { StyledContainer } from '../container/styled';

export const StyledPromo = styled.section`
  padding: 40px 0;
  background-color: ${(props) => props.theme.colors.colorLightRed};

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 20px 0;
  }
`;

export const StyledPromoContainer = styled(StyledContainer)`
  display: grid;
  grid-gap: 40px;
  grid-template-areas:
    'countdown countdown slideshow slideshow'
    'cardA cardB slideshow slideshow';

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    grid-gap: 20px;
    place-items: center;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    grid-gap: 10px;
    row-gap: 30px;
    grid-template-areas:
    'countdown countdown'
    'slideshow slideshow'
    'cardA cardB';
  }
`;
