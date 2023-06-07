import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import { Pagination } from 'swiper'
import Image1 from "../assets/img/img1.jpg"
import Image2 from "../assets/img/img2.jpg"
import Image3 from "../assets/img/img3.jpg"
import Image4 from "../assets/img/img4.jpg"
import Image5 from "../assets/img/img5.jpg"
import Image6 from "../assets/img/img6.jpg"
import Image7 from "../assets/img/img7.jpg"
import Image8 from "../assets/img/img8.jpg"
import Image9 from "../assets/img/img9.jpg"


const SpaceBetween = () => {
  return (
    <>
    <Swiper spaceBetween={30} pagination={{clickable:"true",}} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>slide 1<img src={Image1}/></SwiperSlide>
      <SwiperSlide>Slide 2<img src={Image2}/></SwiperSlide>
      <SwiperSlide>Slide 3<img src={Image3}/></SwiperSlide>
      <SwiperSlide>Slide 4<img src={Image4}/></SwiperSlide>
      <SwiperSlide>Slide 5<img src={Image5}/></SwiperSlide>
      <SwiperSlide>Slide 6<img src={Image6}/></SwiperSlide>
      <SwiperSlide>Slide 7<img src={Image7}/></SwiperSlide>
      <SwiperSlide>Slide 8<img src={Image8}/></SwiperSlide>
      <SwiperSlide>Slide 9<img src={Image9}/></SwiperSlide>
    </Swiper>
    </>
  )
}

export default SpaceBetween