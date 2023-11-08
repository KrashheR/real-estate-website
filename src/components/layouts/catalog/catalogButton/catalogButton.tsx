import { StyledCatalogButton } from './styled';

interface CatalogButtonProps {
  text: string;
}

function CatalogButton({ text }: CatalogButtonProps) {
  return <StyledCatalogButton>{text}</StyledCatalogButton>;
}

export default CatalogButton;
