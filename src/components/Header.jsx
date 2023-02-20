import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Header.css'



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



const Header = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 4500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="slider-con"
  >
    <SwiperSlide className='slider'><img src="cover-1.avif" alt="" /></SwiperSlide>
    <SwiperSlide className='slider'><img src="css.avif" alt="" /></SwiperSlide>
    <SwiperSlide className='slider'><img src="js.avif" alt="" /></SwiperSlide>
    <SwiperSlide className='slider'><img src="react.avif" alt="" /></SwiperSlide>
    <SwiperSlide className='slider'><img src="nlp.avif" alt="" /></SwiperSlide>
    {/* <SwiperSlide className='slider'>Slide 6</SwiperSlide>
    <SwiperSlide className='slider'>Slide 7</SwiperSlide>
    <SwiperSlide className='slider'>Slide 8</SwiperSlide>
    <SwiperSlide className='slider'>Slide 9</SwiperSlide> */}
  </Swiper>
  )
}

export default Header