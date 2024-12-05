// import React from 'react'
import "./ProductItem.css"
import { FaCartShopping } from "react-icons/fa6";


const ProductItem = ({ productItemData }) => {
    return (
        <>
            <div className="product">
                <div>
                    <img src={productItemData.productImages[0]} alt="" className='product-img' />
                    <h3 className='product-title'>{productItemData.productName_uz}</h3>
                    <div className="product-flex">
                        <p>{productItemData.productMainCategory_uz}</p> <p>{productItemData.productSubCategory_uz}</p>
                    </div>
                    <p>{productItemData.productSizesAndQuantity.length > 1 ? `${productItemData.productSizesAndQuantity[0].price} - ${productItemData.productSizesAndQuantity[productItemData.productSizesAndQuantity.length - 1].price}` : `${productItemData.productSizesAndQuantity[0].price}`}</p>
                </div>
                <button className='default-btn'><FaCartShopping />  Выбор</button>
            </div>
        </>
    )
}

export default ProductItem


