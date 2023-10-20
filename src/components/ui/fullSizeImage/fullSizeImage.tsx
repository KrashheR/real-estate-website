import { StyledFullSizeImage } from "./styled";

interface FullSizeImageProps {
  imageSrc: string;
}

function FullSizeImage({ imageSrc }:FullSizeImageProps) {
  return(
    <>
      <StyledFullSizeImage src={imageSrc}/>
    </>
  );
}

export default FullSizeImage;