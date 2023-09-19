import React from 'react';
import { StyledReadMoreButton } from './styled';

interface ButtonProps {
  children: string;
  href: string;
}

function ReadMoreButton(props: ButtonProps) {
  return <StyledReadMoreButton>{props.children}</StyledReadMoreButton>;
}

export default ReadMoreButton;
