import { StyledNotFoundImage } from './styled';

interface NotFoundImageProps {
  src: string;
}

function NotFoundImage({src}: NotFoundImageProps) {
  return <StyledNotFoundImage src={src} alt="Картинка - ошибка 404"></StyledNotFoundImage>;
}

export default NotFoundImage;
