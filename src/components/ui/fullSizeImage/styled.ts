import styled from "styled-components";

export const StyledFullSizeImage = styled.img`
  width: 100%;
  height: 85vh;
  object-fit: cover;

  &::before{
    content: "";
    background-color: red;
  }
`;