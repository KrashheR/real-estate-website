import styled from 'styled-components';

type StyledPromoCardProps = {
  $area: string;
};

export const StyledPromoCard = styled.a<StyledPromoCardProps>`
  display: flex;
  flex-direction: column;
  padding: 25px;
  justify-content: space-between;
  width: 280px;
  height: 240px;
  border-radius: 25px;
  gap: 10px;
  color: ${(props) => props.theme.colors.colorBlack};
  background-color: ${(props) => props.theme.colors.colorWhite};
  text-decoration: none;
  grid-area: ${(props) => props.$area};
  transition: all 0.3s ease;
  box-shadow: 0px 0px 8px 4px rgba(238, 228, 228, 0.2);

  &:hover {
    transform: scale3d(1.01, 1.01, 1) translateY(-4px);
    box-shadow: 0px 4px 8px 4px rgba(238, 228, 228, 0.4);
  }
`;

export const StyledPromoImg = styled.img`
  width: 200px;
  height: 80px;
`;
