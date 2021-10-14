import React from 'react'

const LOCAL_BACK = "http://localhost:5000";

const FullPageProduct = ({data,addToCart}) => {
 const {_id,name,image,description,brand,category,price,countInStock} = data;
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

      <h2>AQUI VA TODO LO DEL PRODUCTO ALV</h2>
      
    </div>
  )
}

export default FullPageProduct
