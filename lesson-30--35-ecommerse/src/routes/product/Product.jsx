import React, { useEffect, useState } from 'react';
import "./Product.css";
import Nav from '../../components/nav/Nav';
import Search from '../../components/search/Search';
import { useParams } from 'react-router-dom';

import instance from "../../api/axios"

const Product = () => {
  const [singleProductData, setSingleProductData] = useState({})
  let productViewURL = useParams("")

  useEffect(() => {
    instance(`/product/single-product/${productViewURL.id}`)
      .then(response => setSingleProductData(response.data?.singleProduct[0]))
  }, [productViewURL.id])

  console.log(singleProductData)
  return (
    <div>
      <Nav />
      <Search />
      <div className="container">
        <h1>{singleProductData?.productName_uz}</h1>
        <img src={singleProductData?.productImages?.[0]} alt="" />

      </div>
    </div>
  )
}

export default Product
