import Description, {
  DescriptionSize,
} from '../../../components/ui/description/description';
import Phone, { PhoneType } from '../../../components/ui/phone/phone';
import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../components/ui/title/title';
import { StyledAboutContact } from './styled';

function AboutContact() {
  return (
    <StyledAboutContact>
      <Title level={TitleLevel.H2} size={TitleSize.L} weight={TitleWeight.BOLD}>
        Связаться с нами
      </Title>
      <Description size={DescriptionSize.S}>
        При возникновении каких-либо вопросов, Вы всегда можете связаться с нами
        по следующему номеру:
      </Description>
      <Phone phoneType={PhoneType.CONTACTS} />
    </StyledAboutContact>
  );
}

export default AboutContact;
