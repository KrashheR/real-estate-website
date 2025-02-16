import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {
  StyledShowroom,
  StyledShowroomButtons,
  StyledShowroomImage,
  StyledShowroomPicture,
} from './styled';
import ShowroomButton from './showroomButton/showroomButton';
import { useState, useRef, useMemo } from 'react';
import SwiperCore from 'swiper';
import { IRoomSlides } from '../../../types/IBuilding';

interface RoomType {
  type: string;
  label: string;
}

export interface ShowroomProps {
  slides: IRoomSlides[];
}

function Showroom({ slides }: ShowroomProps) {
  const [selectedRoom, setSelectedRoom] = useState('livingroom');
  const swiperRef = useRef<SwiperCore | null>(null);
  const uniqueRooms = useMemo(() => {
    const uniqueTypes = Array.from(new Set(slides.map(slide => slide.type)));
    return uniqueTypes.map(type => {
      const slide = slides.find(s => s.type === type);
      return { type, label: slide?.label ?? '' };
    });
  }, [slides]);

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
    if (swiper) {
      const targetSlideIndex = slides.findIndex(
        (slide) => slide.type === roomType,
      );
      if (targetSlideIndex !== -1) {
        swiper.slideTo(targetSlideIndex);
      }
    }
  }

  return (
    <StyledShowroom>
      <StyledShowroomButtons>
        {uniqueRooms.map((room) => (
          <ShowroomButton
            key={room.type}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
            room={room.type}
            onButtonClick={handleRoomSelection}
          >
            {room.label}
          </ShowroomButton>
        ))}
      </StyledShowroomButtons>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={handleSliderChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index + slide.type} data-type={slide.type}>
            <StyledShowroomPicture>
              <source srcSet={slide.imageMobile} media="(max-width: 576px)" />
              <StyledShowroomImage
                src={slide.image}
                alt={`Изображение ${slide.label} номер ${index}`}
              />
            </StyledShowroomPicture>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledShowroom>
  );
}

export default Showroom;
