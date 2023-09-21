import styled from 'styled-components';

export const StyledSlideshow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 520px;
  border-radius: 25px;
  background-color: white;
  grid-area: slideshow;

  .swiper .swiper-slide {
    background-size: cover;
    background-position: center;
    width: 540px;
    height: 520px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${(props) => props.theme.colors.colorSlideshowButton};
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.colors.colorSlideshowPagination};
  }
`;
