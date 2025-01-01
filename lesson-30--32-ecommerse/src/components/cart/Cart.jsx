import React, { useState } from 'react';
import "./Cart.css";
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

import { IoIosClose } from "react-icons/io";

const Cart = () => {
    let location = useLocation()
    const addedProducts = useSelector(state => state.cart.cartProducts);
    const [isCartOpen, setIsCartOpen] = useState(false);

    console.log(addedProducts)
    const bannedPatterns = [/^\/admin/, /^\/login/];

    return !bannedPatterns.some((pattern) => pattern.test(location.pathname)) ? (
        <div className="cart-wrapper">

            {isCartOpen ? <></> :
                <button onClick={() => setIsCartOpen(!isCartOpen)} className="cart-btn">
                    <p className='cart-length'>{addedProducts.length}</p><FaCartShopping />
                </button>}


            <div className={isCartOpen ? "cart cart--active" : "cart"}>
                <button onClick={() => setIsCartOpen(!isCartOpen)} className="close-cart__btn">
                    <IoIosClose className="close-cart__btn" />
                </button>

                <div className="cart-container">
                    {!addedProducts || addedProducts.length === 0 ? (
                        <p className="empty-cart__text">Your cart is empty</p>
                    ) : (
                        <>
                            <div className="products-wrapper">
                                {addedProducts.map((product) => (
                                    <div className="product-item" key={product._id}>
                                        <img width={150} height={150} src={product.productImages[0]} alt="" />
                                        <strong className="cart-product__title">{product.productName_uz}</strong>
                                        <b className="cart-product__price">{product.totalPrice} UZS</b>
                                    </div>
                                ))}
                            </div>
                            <form className="cart-form">
                                <input type="text" placeholder="Ism" required />
                                <input type="text" placeholder="+998 ( )" required />
                                <button onClick={""}>Yuborish</button>
                            </form>
                        </>
                    )}
                </div>
            </div>



        </div>
    ) : null;

}

export default Cart;
