import React from "react";
// import Swiper, { Navigation, Pagination } from "swiper";
import Swiper from "swiper" ;

// import "swiper/css";
import "swiper/css/bundle"
import "../css/GetStarted.css"

// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const swiper = new Swiper("swiper", {
//   module: [Navigation, Pagination],
// });



// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

const GetStarted = () => {
  return (
    <>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          
        </div>

        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
      </div>
    </>
  );
};

export default GetStarted;
