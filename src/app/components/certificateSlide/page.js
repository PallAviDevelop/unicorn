 "use client";
// import React from "react";
// import Image from "next/image";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// //slick slider
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// import { certificate } from "../../data/data";


// const CertificateSlide = () => {
//   return (
//     <div className="text-center py-10">
     
//       <Swiper
     
//         // install Swiper modules
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         spaceBetween={50}
//         slidesPerView={5}
//         //navigation
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log('slide change')}
//     >
//        {certificate.map((item, i) => (
        
//       <SwiperSlide className="w-[200px] mx-auto h-[200px] flex justify-center items-center"
//            key={i}> <Image
//                 className="h-auto w-[169px]"
//                 src={item.imgcert}
//                 width={169}
//                 height={52}
//                 alt="gmp logo"
//               /></SwiperSlide>
             
//        ))}
      
//     </Swiper>
//     </div>
//   );
// };

// export default CertificateSlide;

import Image from "next/image";
import { certificate } from "../../data/data";
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class CertificateSlide extends Component{
  render(){
    const settings = {
      dots: false,
      infinite: true,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      pauseOnFocus: true,
      rtl: false,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(
      <div className="mainContainer">
       
        <Slider {...settings}>
        {certificate.map((item, i) => (
        <div className="container">
          <Image
                 className="h-auto w-[169px]"
                 src={item.imgcert}
                 width={169}
                 height={52}
                 alt="certificate logo"
              />
        {/* <img src={item.imgcert} /> */}
      </div>
        ))}
          
        
        </Slider>
      </div>
    );
  }
}

export default CertificateSlide;