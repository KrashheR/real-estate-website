import styled from 'styled-components';
import { TitleSize, TitleWeight } from './title';

type StyledTitleProps = {
  $titleSize: TitleSize;
  $titleWeight: TitleWeight;
};

export const StyledTitle = styled.h1<StyledTitleProps>`
  padding: 0;
  font-size: ${(props) => props.theme.fontSizes.desktop[props.$titleSize]};
  font-weight: ${(props) => props.$titleWeight};

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    font-size: ${(props) => props.theme.fontSizes.laptop[props.$titleSize]};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.tablet[props.$titleSize]};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: ${(props) => props.theme.fontSizes.mobile[props.$titleSize]};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: ${(props) =>
      props.theme.fontSizes.mobileSmall[props.$titleSize]};
  }
`;
