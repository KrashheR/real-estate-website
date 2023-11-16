import styled from 'styled-components';

export const StyledAboutPerson = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  width: 770px;
  height: 270px;
  padding: 32px;
  padding-left: 0;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.colorLightRed};

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    width: 60vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 100%;
  }
`;

export const StyledAboutPersonPhoto = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  right:0;
  margin: auto 0;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const StyledAboutPersonPhotoContainer = styled.div`
  position: relative;
  height: 190px;
  width: 220px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  background-color: ${(props) => props.theme.colors.colorWhite};
`;

export const StyledAboutPersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 560px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    width: 40vw;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 70%;
  }
`;
