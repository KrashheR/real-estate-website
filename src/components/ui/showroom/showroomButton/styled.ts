import styled from "styled-components";

interface StyledShowroomButtonProps {
  $active: boolean;
}

export const StyledShowroomButton = styled.button<StyledShowroomButtonProps>`
  width: 140px;
  height: 60px;
  font-size: 16px;
  border: none;
  background-color: ${(props) => props.$active ? props.theme.colors.colorMainRed : props.theme.colors.colorLightRed};
  color: ${(props) => props.$active ? props.theme.colors.colorWhite : props.theme.colors.colorBlack};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`;