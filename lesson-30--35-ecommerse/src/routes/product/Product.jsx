import React, { useEffect, useState } from 'react';
import "./Product.css";
import Nav from '../../components/nav/Nav';
import Search from '../../components/search/Search';
import { useParams } from 'react-router-dom';

import instance from "../../api/axios"

import { IoIosArrowForward } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Product = () => {
  const [productAmount, setProductAmount] = useState(1)
  const [singleProductData, setSingleProductData] = useState({})
  let productViewURL = useParams("")

  useEffect(() => {
    instance(`/product/single-product/${productViewURL.id}`)
      .then(response => setSingleProductData(response.data?.singleProduct[0]))
  }, [productViewURL.id])

  // console.log({singleProductData?.productSizesAndQuantity?.price?.[0]})
  // console.log(singleProductData?.productSizesAndQuantity)
  return (
    <div className='product-view'>
      <Nav />
      <Search />
      <div className="container">
        <div className="main-flex product-wrapper">
          <img className='product-img' src={singleProductData?.productImages?.[0]} alt="" />
          <div className='product-details'>

            <h1 className='productView-title'>{singleProductData?.productName_uz}</h1>

            <div className="product-type">
              <p>{singleProductData?.productMainCategory_uz}</p>
              <IoIosArrowForward />
              <p>{singleProductData?.productSubCategory_uz}</p>
            </div>

            <div className="product-view__select">
              <div className="flex">
                <p>Ўлчам:</p>
                <select name="" id="" className='product-view__sizeselect'>
                  {
                    singleProductData?.productSizesAndQuantity?.map(i =>
                      <>
                        {/* <p className='product-price'>{i.price}</p> */}
                        <option value={i.size} className='product-size'>{i.size}</option>
                        {/* <p className='product-quantity'>Омборда: {i.quantity}</p> */}
                      </>
                    )
                  }
                </select>
              </div>


            </div>

            <div className="product-view__desc">
              {
                singleProductData?.productDescription_uz?.map(i =>
                  <>
                    <p className='product-desc__item'> - {i}</p>
                  </>
                )
              }
            </div>
            <div className='purchase'>
              <div className="flex">
                <div className='item'>
                  <p>Сони:</p>
                  <div className="flex">
                    <div className="counter">
                      <button onClick={() => (setProductAmount(productAmount - 1))}>-</button>
                      <strong>{productAmount}</strong>
                      <button onClick={() => (setProductAmount(productAmount + 1))}>+</button>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <p>Умумий нархи:</p>
                  {/* <button>{singleProductData?.productSizesAndQuantity?.price?.[0]}</button> */}
                  <button className='total-price'>2000 SUM</button>
                </div>
                {/* <button> <FaCartShopping /> Саватга қўшиш</button> */}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Product
