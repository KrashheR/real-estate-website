import React, { ReactNode } from 'react';
import { StyledDescription } from './styled';

interface DescriptionProps {
  children: string;
}

function Description(props: DescriptionProps) {
  return <StyledDescription>{props.children}</StyledDescription>;
}

export default Description;
