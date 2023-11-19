import styled from "styled-components";
import { PhoneType } from "./phone";

interface PhoneProps {
  phoneType: PhoneType;
}

export const StyledPhone = styled.a<PhoneProps>`
  margin-top: ${(props) => props.phoneType === "contacts" ? "auto" : "0"};
  font-size: ${(props) => props.phoneType === "contacts" ? "24px" : "18px"};
  font-weight: 700;
  color: ${(props) => props.theme.colors.colorBlack};
  transition: all 0.3s ease;

  &:hover{
    color: ${(props) => props.theme.colors.colorMainRed};
  }
`;