  import styled from 'styled-components';
  import { StyledReadMoreButton } from '../readMoreButton/styled';

  export const StyledSlideshow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 540px;
    height: 520px;
    border-radius: 25px;
    grid-area: slideshow;

    @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
      width: 45vw;
      height: 100%;
    }

    @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
      width: 90vw;
      height: 60vw;
    }

    @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
        height: 80vw;
      }

    &:hover {
      .swiper-button-prev,
      .swiper-button-next {
        opacity: 1;
      }
      .swiper-button-disabled {
        opacity: 0.35;
      }
    }

    .swiper,
    .swiper-slide {
      background-size: cover;
      background-position: center;
      width: 540px;
      height: 520px;
      border-radius: 25px;

      @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
        width: 45vw;
        height: 100%;
      }

      @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
        width: 90vw;
        height: 60vw;
      }

      @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
        height: 80vw;
      }
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

      @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
        border-radius: 50%;
        width: 45px;
        height: 45px;
        opacity: 1;
      }

      @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
        width: 40px;
        height: 40px;
      }
    }

    .swiper-button-disabled {
      @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
        opacity: 0.35;
      }
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
      background-color: ${(props) =>
        props.theme.colors.colorSlideshowPaginationActive};
      width: 8px;
      height: 8px;
    }
  `;

  export const StyledSlideshowImage = styled.img`
    width: 540px;
    height: 520px;
    object-fit: cover;
    border-radius: 25px;

    @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
      width: 45vw;
      height: 100%;
    }

    @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
      width: 90vw;
      height: 60vw;
    }

    @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
        height: 80vw;
      }
  `;

  export const StyledSlideshowLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
  `;

  export const StyledSlideshowTitle = styled.h3`
    position: absolute;
    left: 0;
    display: inline-block;
    max-width: 400px;
    padding: 15px;
    color: ${(props) => props.theme.colors.colorWhite};
    font-size: 34px;
    font-weight: 600;
    z-index: 2;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);

    @media (max-width: ${(props) => props.theme.deviceSizes.mobile}) {
      font-size: 24px;
    }

    @media (max-width: ${(props) => props.theme.deviceSizes.mobileSmall}) {
      font-size: 20px;
    }
  `;

  export const StyledSlideshowButton = styled(StyledReadMoreButton)`
    position: absolute;
    display: inline-block;
    right: 20px;
    bottom: 20px;
    z-index: 3;
  `;
