import React from 'react'
import {useParams } from "react-router-dom";

const LOCAL_BACK = "http://localhost:5000";

const FullPageProduct = ({prod,addToCart}) => {
const {_id,name,image,description,brand,category,price,countInStock} = prod;

  return (
    <div className="productItem">
      <div className="image-container">
      <img src={`${LOCAL_BACK+image}`} alt={name} />
      </div>
      <div className="information-container">
        <p><span>Product: </span>{" "+name}</p>
        <p><span>Description: </span>{" "+description}</p>
        <p><span>Brand: </span>{" "+brand}</p>
        <p><span>Category:</span>{" "+category}</p>
        <p><span>Price:</span>{" $"+price}</p>
        <p><span>In Stock:</span>{" "+countInStock}</p>
        <button className="addToCartButton" onClick={() => addToCart(_id)}> <span className="textButtonAdd"> Add to Cart </span> </button>
      </div>
    </div>
  )
}

export default FullPageProduct