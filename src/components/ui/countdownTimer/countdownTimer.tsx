import { useState, useEffect } from 'react';
import {
  StyledCountdownTimer,
  StyledCountdownTimerContainer,
  StyledCountdownTimerValue,
  StyledCountdownTimerLabel,
} from './styled';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  endDate: Date;
}

function getDifference(endDate: Date): number {
  const now = new Date();
  return endDate.getTime() - now.getTime();
}

function convertDifferenceToTime(difference: number): Countdown {
  if (difference < 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownTimer({ endDate } : CountdownTimerProps){
  const getRemainingTime = (targetDate: Date) => {
    const difference = getDifference(targetDate);
    return convertDifferenceToTime(difference);
  };

  const [timeLeft, setTimeLeft] = useState<Countdown>(
    getRemainingTime(endDate),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <StyledCountdownTimer>
      <StyledCountdownTimerContainer>
        <StyledCountdownTimerValue>{timeLeft.days}</StyledCountdownTimerValue>
        <StyledCountdownTimerLabel>дней</StyledCountdownTimerLabel>
      </StyledCountdownTimerContainer>
      <StyledCountdownTimerContainer>
        <StyledCountdownTimerValue>{timeLeft.hours}</StyledCountdownTimerValue>
        <StyledCountdownTimerLabel>часов</StyledCountdownTimerLabel>
      </StyledCountdownTimerContainer>
      <StyledCountdownTimerContainer>
        <StyledCountdownTimerValue>
          {timeLeft.minutes}
        </StyledCountdownTimerValue>
        <StyledCountdownTimerLabel>минут</StyledCountdownTimerLabel>
      </StyledCountdownTimerContainer>
      <StyledCountdownTimerContainer>
        <StyledCountdownTimerValue>
          {timeLeft.seconds}
        </StyledCountdownTimerValue>
        <StyledCountdownTimerLabel>секунд</StyledCountdownTimerLabel>
      </StyledCountdownTimerContainer>
    </StyledCountdownTimer>
  );
};

export default CountdownTimer;
