// import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"

const Home = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.escuelajs.co/api/v1/products")
            const data = await response.json()
            setProducts(data)
        })()
    }, [])

    function addToCard(addedProduct) {
        dispatch({ addedProduct, type:"ADD_TO_CART" })
    }

    return (
        <div>
            <div className="container">
                <div className="carts">
                    {
                        products?.map(({ title, description, images, id, price }) => (
                            <div className='product-cart' key={id}>
                                <img src={images[0]} alt={description} />
                                <h1>{title.slice(0, 18) + "..."}</h1>
                                <p>{description.slice(0, 45) + "..."}</p>
                                {/* <br /> */}

                                <strong style={{ fontSize: 30 + "px" }}>${price}</strong>
                                <button className='btn btn-primary' onClick={() => addToCard({ title, description, images, id, price })}>Add To Card</button>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Home
