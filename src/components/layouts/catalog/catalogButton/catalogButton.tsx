import { MouseEventHandler } from 'react';
import { StyledCatalogButton } from './styled';

interface CatalogButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isAppartmentSelected: boolean;
}

function CatalogButton({ text, onClick, isAppartmentSelected }: CatalogButtonProps) {
  return <StyledCatalogButton isActive={isAppartmentSelected} onClick={onClick}>{text}</StyledCatalogButton>;
}

export default CatalogButton;
