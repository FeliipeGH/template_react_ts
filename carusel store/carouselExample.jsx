import React from 'react';

import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import slide1Desk from "assets/img/main/slide_1_desk.png";
import slide2Desk from "assets/img/main/slide_2_desk.png";
import slide3Desk from "assets/img/main/slide_3_desk.png";

import slide1Mov from "assets/img/main/slide_1_mov.png";
import slide2Mov from "assets/img/main/slide_2_mov.png";
import slide3Mov from "assets/img/main/slide_3_mov.png";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const CustomCarousel = () => {
    return (
        <div className="mb-5">
            <SlideComponent imageDesk={slide1Desk} imageMov={slide1Mov}/>
            {/*<Swiper
                id="main"
                tag="section"
                wrapperTag="ul"
                spaceBetween={0}
                slidesPerView={1}
                loop={false}
                pagination={{
                    "clickable": true
                }}
                navigation={false}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
            >
                <SwiperSlide key="slide-2" tag="li">

                </SwiperSlide>
            </Swiper>*/}
        </div>
    );
};


const SlideComponent = ({imageDesk, imageMov}) => {
    return (
        <div className="grid place-content-center ">
            <div className="h-full">
                <img src={imageDesk} alt="..."
                     className="hidden md:block object-cover	"
                />
            </div>
            <div className="h-full">
                <img src={imageMov} alt="..."
                     className="md:hidden object-cover	"
                />
            </div>
        </div>
    );
};

