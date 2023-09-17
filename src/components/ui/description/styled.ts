import styled from 'styled-components';

export const StyledDescription = styled.p`
  margin-block-start: 0;
  color: ${(props) => props.theme.colors.textGray};
  font-size: 14px;
  font-weight: 400;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 0 5px;
  }
`;
