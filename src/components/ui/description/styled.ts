import styled from 'styled-components';
import { DescriptionSize } from './description';

interface StyledDescriptionProps {
  $descriptionSize: DescriptionSize;
}

export const StyledDescription = styled.p<StyledDescriptionProps>`
  margin-block-start: 0;
  font-size: ${(props) =>
    props.theme.fontSizes.desktop[props.$descriptionSize]};
  font-weight: 400;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    font-size: ${(props) =>
      props.theme.fontSizes.laptop[props.$descriptionSize]};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    font-size: ${(props) =>
      props.theme.fontSizes.tablet[props.$descriptionSize]};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: ${(props) =>
      props.theme.fontSizes.mobile[props.$descriptionSize]};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: ${(props) =>
      props.theme.fontSizes.mobileSmall[props.$descriptionSize]};
  }
`;
