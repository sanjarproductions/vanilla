import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './ProductSlider.css';

const ProductSlider = ({ categoryData }) => {
    console.log(categoryData)
    return (
        <>
            <Swiper
                slidesPerView={8}
                spaceBetween={10}
                className="mySwiper"
            >
                {
                    categoryData.allRefinedProducts.map(i =>
                        <SwiperSlide key={i._id}>{i.productName_uz}</SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}

export default ProductSlider
