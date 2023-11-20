import styled from "styled-components";
import { PaginationType } from "./pagintaion";

interface PaginationProps {
  paginationType: PaginationType;
}

export const StyledPagination = styled.div<PaginationProps>`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top:${(props) => props.paginationType === PaginationType.NEWS ? "30px": "0"};
`;

export const StyledPaginationButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.colorLightRed};
  border: 1px solid ${(props) => props.theme.colors.colorLightRed};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:disabled{
    background-color: ${(props) => props.theme.colors.colorMainRed};
    color: ${(props) => props.theme.colors.colorWhite};
    border-color:${(props) => props.theme.colors.colorMainRed};
  }

  &:hover{
    border-color:${(props) => props.theme.colors.colorMainRed};
  }
`;