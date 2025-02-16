import {
  StyledAboutPerson,
  StyledAboutPersonPhotoContainer,
  StyledAboutPersonPhoto,
  StyledAboutPersonInfo,
} from './styled';
import Title, {
  TitleLevel,
  TitleSize,
  TitleWeight,
} from '../../../components/ui/title/title';
import Description, {
  DescriptionSize,
} from '../../../components/ui/description/description';
import bossVasiliySpeech from '../../../assets/sounds/bossVasiliySpeech.m4a';
import { useRef, useState } from 'react';

function AboutPerson() {
  const [audioInitialized, setAudioInitialized] = useState(false);
  const bossSound = useRef(new Audio(bossVasiliySpeech));

  const handleMouseEnter = () => {
    if (!audioInitialized) {
      bossSound.current.load();
      setAudioInitialized(true);
    }

    const playPromise = bossSound.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log(
          'Воспроизведение аудио отложено до взаимодействия с пользователем',
        );
      });
    }
  };

  const handleMouseLeave = () => {
    bossSound.current.pause();
    bossSound.current.currentTime = 0;
  };

  return (
    <StyledAboutPerson
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledAboutPersonPhotoContainer>
        <StyledAboutPersonPhoto
          src={
            'https://raw.githubusercontent.com/KrashheR/cdn.krashher/refs/heads/main/images/real-estate/about/boss.webp'
          }
          alt="Фотография босса"
        />
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
