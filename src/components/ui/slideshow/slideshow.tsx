import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StyledSlideshow,
  StyledSlideshowButton,
  StyledSlideshowPicture,
  StyledSlideshowLink,
  StyledSlideshowImage,
} from './styled';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IPromo } from '../../../types/IPromo';

interface SlideshowProps {
  slides: IPromo[];
}

function Slideshow({ slides }: SlideshowProps) {
  return (
    <StyledSlideshow>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <StyledSlideshowLink to={slide.href}>
                <StyledSlideshowPicture>
                  <source srcSet={slide.imageMobile} media="(max-width: 576px)"/>
                  <StyledSlideshowImage src={slide.image} alt={slide.title}/>
                </StyledSlideshowPicture>
                <StyledSlideshowButton>Подробнее</StyledSlideshowButton>
              </StyledSlideshowLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledSlideshow>
  );
}

export default Slideshow;
