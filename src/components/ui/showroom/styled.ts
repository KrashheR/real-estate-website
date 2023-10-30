import styled from "styled-components";

export const StyledShowroom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:hover{
    .swiper-button-prev,
    .swiper-button-next {
      opacity: 1;
    }
    .swiper-button-disabled {
      opacity: 0.35;
    }
  }

  .swiper, .swiper-slide {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 700px;
    border-radius: 25px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${(props) => props.theme.colors.colorSlideshowButton};
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.theme.colors.colorWhite};
    border-radius: 25%;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    border-radius: 50%;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 14px;
    font-weight: 700;
    align-self: center;
    justify-self: center;
  }

  .swiper-pagination-bullet {
    background-color: ${(props) => props.theme.colors.colorSlideshowPagination};
    width: 6px;
    height: 6px;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.colors.colorSlideshowPaginationActive};
    width: 8px;
    height: 8px;
  }
`;

export const StyledShowroomButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledShowroomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;