import styled from 'styled-components';

export const StyledApartmentTitleContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
`;

export const StyledApartmentTitle = styled.span`
  position: absolute;
  bottom: 1%;
  color: white;
`;
