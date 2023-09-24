import React from "react";
import { StyledErrorButton, StyledErrorContainer, StyledErrorText } from "./styled";

function ErrorUI() {
  function refreshPage() {
    window.location.reload();
  }

  return(
    <StyledErrorContainer>
      <StyledErrorText>Упс! Произошла непредвиденная ошибка! Перезагрузите страницу и всё будет хорошо!</StyledErrorText>
      <StyledErrorButton onClick={refreshPage}>Перезагрузить</StyledErrorButton>
    </StyledErrorContainer>
  );
}

export default ErrorUI;