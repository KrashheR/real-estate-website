import styled from 'styled-components';

type StyledPromoCardProps = {
  $area: string;
};

export const StyledPromoCard = styled.a<StyledPromoCardProps>`
  display: flex;
  flex-direction: column;
  grid-area: ${(props) => props.$area};
  padding: 25px;
  width: 280px;
  height: 240px;
  border-radius: 25px;
  gap: 10px;
  color: ${(props) => props.theme.colors.colorBlack};
  background-color: ${(props) => props.theme.colors.colorWhite};
  text-decoration: none;
  box-shadow: 0px 0px 8px 4px rgba(238, 228, 228, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    color 0.1s ease;

  &:hover {
    color: ${(props) => props.theme.colors.colorMainRed};
    transform: scale3d(1.01, 1.01, 1) translateY(-2px);
    box-shadow: 0px 2px 8px 4px rgba(238, 228, 228, 0.7);
  }
`;

export const StyledPromoImg = styled.img`
  width: 200px;
  height: 80px;
  margin-top: auto;
`;
