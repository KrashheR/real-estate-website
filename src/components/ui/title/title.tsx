import React from 'react';
import { StyledTitle } from './styled';

export enum TitleLevel {
  H1 = '1',
  H2 = '2',
  H3 = '3',
  H4 = '4',
  H5 = '5',
  H6 = '6',
}

export enum TitleSize {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
  XXL = 'xxl',
}

export enum TitleWeight {
  NORMAL = 400,
  MEDIUM = 500,
  SEMIBOLD = 600,
  BOLD = 700,
  BLACK = 800,
}

interface TitleProps {
  level: TitleLevel;
  size: TitleSize;
  weight: TitleWeight;
  children: string;
}

const Title: React.FC<TitleProps> = ({ level, size, weight, children }) => {
  return (
    <StyledTitle as={`h${level}`} $titleSize={size} $titleWeight={weight}>
      {children}
    </StyledTitle>
  );
};

export default Title;
