import styled from 'styled-components';

export const StyledFullSizePicture = styled.picture`
  display: block;
  width: 100%;
  height: 85vh;
  object-fit: cover;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    height: calc(100vh - 110px);
  }
`;

export const StyledFullSizeImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
