import { StyledHiddenLabel } from "./styled";

interface HiddenLabelProps {
  children: string;
  for: string;
}

function HiddenLabel(props: HiddenLabelProps) {
  return(<StyledHiddenLabel htmlFor={props.for}>{props.children}</StyledHiddenLabel>)
}

export default HiddenLabel;