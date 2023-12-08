import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRouteButton = styled(Link)`
  margin-top: 10px;
  width: 200px;
  padding: 10px;
  text-align: center;
  border: 2px solid ${(props) => props.theme.colors.colorMainRed};
  border-radius: 25px;
  color: ${(props) => props.theme.colors.colorWhite};
  background-color: ${(props) => props.theme.colors.colorMainRed};
  transition: all 0.3s ease;

  &:hover{
    color: ${(props) => props.theme.colors.colorMainRed};
    background-color: ${(props) => props.theme.colors.colorWhite};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    align-self: center;
    width: 180px;
    padding: 8px;
  }
`;