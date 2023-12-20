import {
  StyledAboutPerson,
  StyledAboutPersonPhotoContainer,
  StyledAboutPersonPhoto,
  StyledAboutPersonInfo,
} from './styled';
import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight
} from '../../../components/ui/title/title';
import Description, {
  DescriptionSize,
} from '../../../components/ui/description/description';
import bossVasiliySpeech from '../../../assets/sounds/bossVasiliySpeech.m4a';
import { useRef } from 'react';

function AboutPerson() {
  const audioRef = useRef(new Audio(bossVasiliySpeech));

  const handleMouseEnter = () => {
    audioRef.current.play();
  };

  const handleMouseLeave = () => {
    audioRef.current.pause();
  };

  return (
    <StyledAboutPerson
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledAboutPersonPhotoContainer>
        <StyledAboutPersonPhoto src={'https://www.krashher.ru/real-estate/images/about/boss.webp'} alt="Фотография босса"/>
      </StyledAboutPersonPhotoContainer>
      <StyledAboutPersonInfo>
        <Description size={DescriptionSize.S}>
          Меня зовут Василий Мурзыченко. Я отвечаю за постройку домов в компании
          real-estate. Как видите, в моих лапах достаточно сил, чтобы держать не
          только молоток и уровень, но и контроль над всем строительством. То,
          что у меня лапки - не оправдание.
        </Description>
        <Title
          level={TitleLevel.H2}
          size={TitleSize.L}
          weight={TitleWeight.BOLD}
        >
          Василий Мурзыченко
        </Title>
      </StyledAboutPersonInfo>
    </StyledAboutPerson>
  );
}

export default AboutPerson;
