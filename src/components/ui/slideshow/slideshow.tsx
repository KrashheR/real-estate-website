import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSlideshow, StyledSlideshowButton, StyledSlideshowImage, StyledSlideshowLink, StyledSlideshowTitle } from './styled';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface Slide {
  href: string;
  image: string;
  title: string;
}

function Slideshow() {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    fetch('https://krashher.ru/real-estate/api/get-slideshow.php')
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.log(error));
  }, []);

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
