import { StyledPhone } from './styled';

export enum PhoneType {
  CONTACTS = "contacts",
  HEADER = "header",
  FOOTER = "footer",
}

interface PhoneProps {
  phoneType: PhoneType;
}

function Phone({phoneType}: PhoneProps) {
  return (
    <>
      <StyledPhone href={'tel:+7123456789'} phoneType={phoneType}>+7123456789</StyledPhone>
    </>
  );
}

export default Phone;
