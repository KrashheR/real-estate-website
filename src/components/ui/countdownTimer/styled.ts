import styled from 'styled-components';

export const StyledCountdownTimer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledCountdownTimerValue = styled.span`
  display: block;
  font-size: 28px;
  font-weight: 700;

  @media(max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    font-size: 20px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
    font-size: 22px;
  }
`;

export const StyledCountdownTimerLabel = styled.span`
  display: block;
  font-size: 12px;
`;

export const StyledCountdownTimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
