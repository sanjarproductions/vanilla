import React, { useState } from 'react';
import "./Cart.css";
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

const Cart = () => {
    let location = useLocation()
    const addedProducts = useSelector(state => state.cartProducts);
    const [isCartOpen, setIsCartOpen] = useState(false);

    console.log(addedProducts)
    const bannedPatterns = [/^\/admin/, /^\/login/];

    return !bannedPatterns.some((pattern) => pattern.test(location.pathname)) ? (
        <div className="cart-wrapper">
            <button onClick={() => setIsCartOpen(!isCartOpen)} className="cart-btn">
                <FaCartShopping />
            </button>
            <div className={isCartOpen ? "cart cart--active" : "cart"}>
                {!addedProducts || addedProducts.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    addedProducts.map((product) => (
                        <div key={product.id}>
                            <p>Price: {product.price}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    ) : null;

}

export default Cart;
