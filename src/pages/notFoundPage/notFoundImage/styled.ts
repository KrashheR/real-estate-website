import styled from "styled-components";

export const StyledNotFoundImage = styled.img`
  width: 400px;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 80vw;
  }
`;