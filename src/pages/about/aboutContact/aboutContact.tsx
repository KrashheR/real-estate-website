import Description, {
  DescriptionType,
} from '../../../components/ui/description/description';
import Phone, { PhoneType } from '../../../components/ui/phone/phone';
import Title, {
  TitleLevel,
  TitleType,
} from '../../../components/ui/title/title';
import { StyledAboutContact } from './styled';

function AboutContact() {
  return (
    <StyledAboutContact>
      <Title level={TitleLevel.H2} type={TitleType.CONTACTS}>
        Связаться с нами
      </Title>
      <Description type={DescriptionType.CONTACTS}>
        При возникновении каких-либо вопросов, Вы всегда можете связаться с нами
        по следующему номеру:
      </Description>
      <Phone phoneType={PhoneType.CONTACTS}/>
    </StyledAboutContact>
  );
}

export default AboutContact;
