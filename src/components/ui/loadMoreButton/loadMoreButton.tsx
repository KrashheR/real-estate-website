import { StyledLoadMoreButton } from "./styled";

interface LoadMoreButtonProps {
  onClick: ()=>void;
  isLoading: boolean;
}

function LoadMoreButton({onClick, isLoading}:LoadMoreButtonProps) {

  return(
    <StyledLoadMoreButton onClick={onClick}>
      {isLoading ? "Загрузка...": "Загрузить ещё"}
    </StyledLoadMoreButton>
  );
}

export default LoadMoreButton;