import { StyledRouteButton } from "./styled";

interface RouteButtonProps{
  link: string;
  children: string;
}

function RouteButton({link, children}: RouteButtonProps) {
  return(
    <StyledRouteButton to={link}>{children}</StyledRouteButton>
  );
}

export default RouteButton;