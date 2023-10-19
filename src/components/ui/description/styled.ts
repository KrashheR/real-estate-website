import styled from 'styled-components';
import { DescriptionType } from './description';

interface StyledDescriptionProps {
  $descriptionType: DescriptionType;
}

export const StyledDescription = styled.p<StyledDescriptionProps>`
  margin-block-start: 0;
  font-size: ${(props) => {
    return props.$descriptionType === DescriptionType.APARTMENT ? '16px' : '14px';
  }};
  font-weight: 400;

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    padding: 0 5px;
  }
`;
