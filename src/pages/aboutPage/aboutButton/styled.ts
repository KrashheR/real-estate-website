import styled from "styled-components";

export const StyledAboutButton = styled.button`
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.colorMainRed};
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.colorMainRed};
  color: ${(props) => props.theme.colors.colorWhite};
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover{
    border: 2px solid ${(props) => props.theme.colors.colorMainRed};
    background-color: ${(props) => props.theme.colors.colorWhite};
    color: ${(props) => props.theme.colors.colorMainRed};
  }
`;