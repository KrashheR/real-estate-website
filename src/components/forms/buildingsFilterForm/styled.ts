import styled from "styled-components";

export const StyledBuildingsFilterForm = styled.form`
  display: flex;
  gap: 45px;
  padding-bottom: 50px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    gap: 20px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width:100%;
    height:100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledBuildingsFormSubtitle = styled.p`
  font-size: 14px;
  padding-bottom: 8px;
`;

export const StyledBuildingsFormItem = styled.span`
  display: flex;
  flex-direction: column;
  width: 370px;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    width: 100%;
    align-items: center;
  }
`;

export const StyledBuildingsFormRadios = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    justify-content: center;
    gap: 15px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    gap: 10px;
  }
`;

