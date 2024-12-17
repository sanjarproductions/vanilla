// import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartProducts = useSelector(state => state.cartProducts);
    console.log(cartProducts)

    return (
        <div className="container">
            <div className='carts'>
                {
                    cartProducts?.map(({ title, description, images, id, price }) => (
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
    )
}

export default Cart
