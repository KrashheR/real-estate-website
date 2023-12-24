import styled from "styled-components";

export const StyledNotFoundImage = styled.img`
  width: 400px;
  height: 200px;

  @media(max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    width: 80vw;
  }
`;