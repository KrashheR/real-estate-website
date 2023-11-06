import { StyledApartments, StyledApartmentsContainer } from "./styled";
import ApartmentsFilterForm from "../../forms/apartmentsFilterForm/apartmentsFilterForm";
import ApartmentsList from "./apartmentsList/apartmentsList";

function Apartments() {
  return (
    <StyledApartments>
      <StyledApartmentsContainer>
        <ApartmentsFilterForm />
        <ApartmentsList />
      </StyledApartmentsContainer>
    </StyledApartments>
  );
}

export default Apartments;
