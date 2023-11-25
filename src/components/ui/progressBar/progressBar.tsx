import React from 'react';
import { ProgressBarContainer, ProgressBarFiller, ProgressText } from './styled';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentQuestion, totalQuestions }) => {
  const progressPercent = (currentQuestion / totalQuestions) * 100;

  return (
    <ProgressBarContainer>
      <ProgressBarFiller width={progressPercent} />
      <ProgressText>{`${progressPercent.toFixed(0)}% пройдено`}</ProgressText>
    </ProgressBarContainer>
  );
};

export default ProgressBar;