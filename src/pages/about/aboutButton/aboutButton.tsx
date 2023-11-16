import { StyledAboutButton } from "./styled";

interface AboutButtonProps {
  onClick: () => void;
}

function AboutButton({onClick}: AboutButtonProps) {
  return(
    <StyledAboutButton onClick={onClick}>
      Записаться на экскурсию
    </StyledAboutButton>
  );
}

export default AboutButton;