import React, { ReactNode } from 'react';
import { StyledTitle } from './styled';

export enum TitleLevel {
  H1 = '1',
  H2 = '2',
  H3 = '3',
  H4 = '4',
  H5 = '5',
  H6 = '6',
}

export enum TitleColor {
  PRIMARY = 'primary',
  GRAY = 'gray',
}

export enum TitleType {
  SECTION = 'section',
  CARD = 'card',
  PROMO = 'promo',
}

interface TitleProps {
  level: TitleLevel;
  color: TitleColor;
  type: TitleType;
  children: string;
}

const Title: React.FC<TitleProps> = ({ level, color, type, children }) => {
  return (
    <StyledTitle as={`h${level}`} $color={color} $titleType={type}>
      {children}
    </StyledTitle>
  );
};

export default Title;
