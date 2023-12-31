import { StyledReadMoreButton } from './styled';

interface ButtonProps {
  children: string;
}

function ReadMoreButton(props: ButtonProps) {
  return <StyledReadMoreButton>{props.children}</StyledReadMoreButton>;
}

export default ReadMoreButton;
