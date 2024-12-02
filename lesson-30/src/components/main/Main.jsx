import { useState, useEffect, Fragment } from 'react'
import instance from '../../api/axios';
import { v4 as uuidv4 } from 'uuid';
import ProductSlider from '../product-slider/ProductSlider';
import "./Main.css"
const Main = () => {
    const [homeReelData, setHomeReelData] = useState([])
    useEffect(() => {
        instance("/category/category-reel")
            .then(response => setHomeReelData(response.data))
    }, [])

    return (
        <>
            <div className="main-container">
                {
                    homeReelData.map(i =>
                        <Fragment key={uuidv4()}>
                            <strong>{i.categoryName_uz}</strong>
                            <ProductSlider categoryData={i} />
                        </Fragment>
                    )
                }
            </div>
        </>
    )
}

export default Main
