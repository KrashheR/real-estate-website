import { StyledPagination, StyledPaginationButton } from "./styled";

interface PaginationProps {
  total: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  paginationType: PaginationType;
}

export enum PaginationType {
  NEWS = "news",
}

function Pagination ({ total, pageSize, currentPage, onPageChange, paginationType } :PaginationProps){
  const totalPages = Math.ceil(total / pageSize);

  return (
    <StyledPagination paginationType={paginationType}>
      {Array.from({ length: totalPages }, (_, index) => (
        <StyledPaginationButton
          key={index}
          disabled={currentPage === index + 1}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </StyledPaginationButton>
      ))}
    </StyledPagination>
  );
}

export default Pagination;
