import { ReactNode } from 'react';
import { StyledContainer } from './styled';

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
