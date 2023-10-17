import styled from 'styled-components';
import { TitleType } from './title';

type StyledTitleProps = {
  $titleType: TitleType;
};

export const StyledTitle = styled.h1<StyledTitleProps>`
  padding: 0;
  font-size: ${(props) => {
    if (props.$titleType === TitleType.SECTION) {
      return '32px';
    } else if (props.$titleType === TitleType.PROMO) {
      return '24px';
    } else if (props.$titleType === TitleType.CARD) {
      return '24px';
    }
  }};
  font-weight: ${(props) => {
    if (props.$titleType === TitleType.CARD) {
      return 700;
    } else if (
      props.$titleType === TitleType.PROMO ||
      props.$titleType === TitleType.SECTION
    ) {
      return 600;
    }
  }};

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: ${(props) => {
      return props.$titleType === TitleType.SECTION
        ? props.theme.fontSizes.sectionTitleMobile
        : props.theme.fontSizes.cardTitleMobile;
    }};
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
    font-size: ${(props) => {
      return props.$titleType === TitleType.SECTION
        ? props.theme.fontSizes.sectionTitleMobileSmall
        : props.theme.fontSizes.cardTitleMobileSmall;
    }};
  }
`;
