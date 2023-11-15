import styled from 'styled-components';

export const StyledCountdownOfferCard = styled.a`
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
  box-shadow: 0px 0px 8px 4px rgba(238, 228, 228, 1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    color 0.1s ease;
  cursor: pointer;

  &:hover {
    transform: scale3d(1.01, 1.01, 1) translateY(-2px);
    box-shadow: 0px 2px 4px 2px rgba(184, 41, 57, 0.4);
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    padding: 15px;
    width: 45vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 90vw;
    height: 240px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 5px;
    height: 200px;
  }
`;

export const StyledCountdownOfferCardText = styled.p`
  color: ${(props) => props.theme.colors.colorLightRed};
  font-size: 16px;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 14px;
  }
`;

export const StyledCountdownOfferCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media(max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    gap: 10px;
  }

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
