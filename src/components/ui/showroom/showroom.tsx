import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { StyledShowroom, StyledShowroomButtons, StyledShowroomImage } from './styled';
import ShowroomButton from './showroomButton/showroomButton';
import { useState, useRef } from 'react';
import SwiperCore from 'swiper';

interface SlideType {
  type: string;
  image: string;
}

interface ShowroomProps {
  slides: SlideType[];
}

function Showroom({ slides }: ShowroomProps) {
  const [selectedRoom, setSelectedRoom] = useState('livingroom');
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleSliderChange = () => {
    const swiper = swiperRef.current;
    if (swiper) {
      const activeSlideIndex = swiper.activeIndex;
      const activeSlideType = slides[activeSlideIndex]?.type;
      if (activeSlideType) {
        setSelectedRoom(activeSlideType);
      }
    }
  };

  function handleRoomSelection(roomType: string) {
    const swiper = swiperRef.current;
    if(swiper) {
      const targetSlideIndex = slides.findIndex((slide) => slide.type === roomType);
      if(targetSlideIndex !== -1) {
        swiper.slideTo(targetSlideIndex);
      }
    }
  };

  return(
    <StyledShowroom>
      <StyledShowroomButtons>
        <ShowroomButton selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} room="livingroom" onButtonClick={handleRoomSelection}>Гостиная</ShowroomButton>
        <ShowroomButton selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} room="bedroom" onButtonClick={handleRoomSelection}>Спальня</ShowroomButton>
        <ShowroomButton selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} room="kitchen" onButtonClick={handleRoomSelection}>Кухня</ShowroomButton>
        <ShowroomButton selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} room="bathroom" onButtonClick={handleRoomSelection}>Ванная</ShowroomButton>
        <ShowroomButton selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} room="hallway" onButtonClick={handleRoomSelection}>Прихожая</ShowroomButton>
      </StyledShowroomButtons>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={handleSliderChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} data-type={slide.type}>
            <StyledShowroomImage src={slide.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledShowroom>
  );

};

export default Showroom;