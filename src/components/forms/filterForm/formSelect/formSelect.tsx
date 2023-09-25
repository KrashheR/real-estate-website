import React from "react";

import   {StyledFormSelect,
StyledFormSelectOption} from "./styled"

interface FormSelectProps {
  id: string;
}

function FormSelect({id} : FormSelectProps){
  return(
    <StyledFormSelect id={id}>
      <StyledFormSelectOption>Все объекты</StyledFormSelectOption>
      <StyledFormSelectOption>Новостройки</StyledFormSelectOption>
      <StyledFormSelectOption>Машиноместа</StyledFormSelectOption>
    </StyledFormSelect>
  );
}

export default FormSelect;