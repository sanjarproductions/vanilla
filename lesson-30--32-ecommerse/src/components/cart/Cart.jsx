import React, { useState } from 'react';
import "./Cart.css";
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
    const addedProducts = useSelector(state => state.cartProducts);
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className="cart-wrapper">
            <button onClick={() => setIsCartOpen(!isCartOpen)} className='cart-btn'>
                <FaCartShopping />
            </button>
            <div className={isCartOpen ? "cart cart--active" : "cart"}>
                {addedProducts.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    addedProducts.map((product, index) => (
                        <div key={index}>
                            <p>Price: {product.price}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Cart;
