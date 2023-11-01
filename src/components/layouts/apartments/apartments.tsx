import { StyledApartments, StyledApartmentsContainer } from "./styled";
import FilterForm from "../../forms/filterForm/filterForm";
import ApartmentsList from "./apartmentsList/apartmentsList";

function Apartments() {
  return (
    <StyledApartments>
      <StyledApartmentsContainer>
        <FilterForm />
        <ApartmentsList />
      </StyledApartmentsContainer>
    </StyledApartments>
  );
}

export default Apartments;
