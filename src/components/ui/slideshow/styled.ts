import styled from 'styled-components';

export const StyledSlideshow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 520px;
  border-radius: 25px;
  grid-area: slideshow;

  &:hover{
    .swiper-button-prev,
    .swiper-button-next {
      opacity: 1;
    }
    .swiper-button-disabled {
      opacity: 0.35;
    }
  }

  .swiper .swiper-slide {
    background-size: cover;
    background-position: center;
    width: 540px;
    height: 520px;
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

export const StyledSlideshowImage = styled.img`
  width: 540px;
  height: 520px;
  object-fit: cover;
  border-radius: 25px;
`;

export const StyledSlideshowLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

export const StyledSlideshowTitle = styled.span`
  position: absolute;
  left: 10px;
  color: ${(props) => props.theme.colors.colorSlideshowTitle};
  font-size: 40px;
  font-weight: 600;
`;