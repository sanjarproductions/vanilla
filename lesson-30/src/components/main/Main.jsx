// import React from 'react'
import { useState, useEffect, Fragment } from 'react'
// import './App.css'
import instance from '../../api/axios';
import { v4 as uuidv4 } from 'uuid';
import ProductSlider from '../product-slider/ProductSlider';

const Main = () => {
    const [homeReelData, setHomeReelData] = useState([])
    useEffect(() => {
        instance("/category/category-reel") //instance("/category/category-reel"
            .then(response => setHomeReelData(response.data))
    }, [])

    return (
        <>
            {
                homeReelData.map(i =>
                    <Fragment key={uuidv4()}>
                        <strong>{i.categoryName_uz}</strong>
                        <ProductSlider categoryData={i}/>
                    </Fragment>
                )
            }
        </>
    )
}

export default Main
