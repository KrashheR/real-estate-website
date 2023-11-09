import { ChangeEvent } from "react";
import FormRadio, { FormRadioType } from "../formRadio/formRadio";
import { StyledCatalogFilterForm } from "./styled";
import { catalogOptions } from "./catalogFormConfig";

interface CatalogFilterFormProps {
  setSelectedRoomType: (roomType: string) => void;
  selectedRoomType: string;
}

function CatalogFilterForm({ setSelectedRoomType }: CatalogFilterFormProps) {

  const handleObjectTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRoomType(e.target.value);
  };

  return (
    <StyledCatalogFilterForm>
      <FormRadio options={catalogOptions} name="catalogRadio" onChange={handleObjectTypeChange} defaultChecked={"1"} type={FormRadioType.CATALOG}/>
    </StyledCatalogFilterForm>
  );
}

export default CatalogFilterForm;