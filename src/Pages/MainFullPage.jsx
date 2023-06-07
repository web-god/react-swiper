import React from 'react'

import {Swiper,SwiperSlide} from "swiper/react"
import { Pagination} from 'swiper'
import Image1 from "../assets/img/screen-1.png"
import Image2 from "../assets/img/screen-2.png"
import Image3 from "../assets/img/screen-3.png"

const MainFullPage = () => {
  return (
    <>
    <Swiper spaceBetween={30} pagination={{clickable:"true",}} modules={[Pagination]} className="mySwiper">
      <SwiperSlide><img src={Image1}/></SwiperSlide>
      <SwiperSlide><img src={Image2}/></SwiperSlide>
      <SwiperSlide><img src={Image3}/></SwiperSlide>
      
    </Swiper>
    </>
    
  )
}

export default MainFullPage