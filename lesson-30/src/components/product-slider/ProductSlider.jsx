// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';

const ProductSlider = ({ categoryData }) => {
    // console.log(categoryData)
    return (
        <>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

            {/* {
                categoryData.allRefinedProducts.map(i =>
                    <p key={uuidv4()}>{i.productDescription_uz}</p>
                )
            } */}
        </>
    )
}

export default ProductSlider
