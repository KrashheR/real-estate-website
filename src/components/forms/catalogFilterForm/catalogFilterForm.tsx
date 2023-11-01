import { ChangeEvent } from "react";
import FormRadio from "../formRadio/formRadio";
import { StyledCatalogFilterForm } from "./styled";
import { catalogOptions } from "./catalogFormConfig";

function CatalogFilterForm() {

  const handleObjectTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Выбрать тип, соответсвующий кнопке")
  };

  return(
    <StyledCatalogFilterForm>
      <FormRadio options={catalogOptions} name="catalogRadio" onChange={handleObjectTypeChange}>

      </FormRadio>
    </StyledCatalogFilterForm>
  );
}

export default CatalogFilterForm;