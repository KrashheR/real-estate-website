import styled from "styled-components";

interface StyledConstructorResultProps {
  isActive: boolean;
}

export const StyledConstructorResult = styled.div<StyledConstructorResultProps>`
  display:  ${(props) => props.isActive ? "flex" : "none"};
  flex-direction: column;
  gap: 40px;
  height: 100%;
  width: 100%;
  color: ${(props) => props.theme.colors.colorBlack};
`;

export const StyledConstructorResultEmpty = styled.p`
  font-size: 18px;
`;