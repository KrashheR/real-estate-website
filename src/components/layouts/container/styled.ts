import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: block;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    padding: 0 2em;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 0 1em;
  }
`;
