import { StyledFullSizeImage, StyledFullSizePicture } from "./styled";

interface FullSizeImageProps {
  imageSrc: string;
  imageMobileSrc: string;
}

function FullSizeImage({ imageSrc, imageMobileSrc }:FullSizeImageProps) {
  return(
    <StyledFullSizePicture>
      <source srcSet={imageMobileSrc} media="(max-width: 576px)"/>
      <StyledFullSizeImage src={imageSrc} alt="Ночная фотография жк"/>
    </StyledFullSizePicture>
  );
}

export default FullSizeImage;