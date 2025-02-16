import styled from 'styled-components';

export const StyledMap = styled.div`
  border-radius: 25px;
  overflow: hidden;
  min-height: 550px;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    height: 500px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    height: 40vh;
  }
`;
