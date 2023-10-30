import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSlideshow, StyledSlideshowButton, StyledSlideshowImage, StyledSlideshowLink, StyledSlideshowTitle } from './styled';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ISlide } from '../../../types/ISlide';


interface SlideshowProps {
  slides: ISlide[];
}

function Slideshow({slides}: SlideshowProps) {

  return (
    <StyledSlideshow>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <StyledSlideshowLink  href={slide.href}>
              <StyledSlideshowTitle>
                {slide.title}
              </StyledSlideshowTitle>
              <StyledSlideshowImage src={slide.image} alt={slide.title} />
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
