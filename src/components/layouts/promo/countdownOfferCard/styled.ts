import styled from 'styled-components';

export const StyledCountdownOfferCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  width: 620px;
  height: 240px;
  border-radius: 25px;
  padding: 25px;
  color: ${(props) => props.theme.colors.colorWhite};
  background: ${(props) => props.theme.colors.promoGradient};
  font-weight: 400;
  grid-area: countdown;
`;

export const StyledCountdownOfferCardSubtitle = styled.p`
  color: ${(props) => props.theme.colors.colorLightRed};
  font-size: 16px;
`;

export const StyledCountdownOfferCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
