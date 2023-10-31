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

export enum TitleType {
  APARTMENT = 'apartment',
  APARTMENTFEATURE = 'apartmentFeature',
  APARTMENTMAP = 'apartmentMap',
  CARD = 'card',
  PROMO = 'promo',
}

interface TitleProps {
  level: TitleLevel;
  type: TitleType;
  children: string;
}

const Title: React.FC<TitleProps> = ({ level, type, children }) => {
  return (
    <StyledTitle as={`h${level}`} $titleType={type}>
      {children}
    </StyledTitle>
  );
};

export default Title;
