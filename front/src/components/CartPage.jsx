import React from "react";

const LOCAL_BACK = "http://localhost:5000";

const CartPage = ({ data, index, delFromCart}) => {
  const { _id, name, image, price, quantity } = data;
  const total = (quantity * price).toFixed(2);
  return (
    <div className="productItem">
        <div className="image-container">
          <img src={`${LOCAL_BACK + image}`} alt={name} />
        </div>
        <div className="information-container">
          <p><span>Product: </span>{" " + name}</p>
          <p><span>Price:</span>{" $" + price} / <span>Quantity:</span>{" "+quantity}</p>
          <p><span>Total: </span>{" $"+total}</p>
          <div className="buttons">
            <button className="deleteOnebtn" onClick={()=>delFromCart(_id)}>Delete One</button>
            <button className="deletebtn" onClick={()=>delFromCart(_id,true)}>Delete All</button>
          </div>
        </div>
      </div>
  );
};

export default CartPage;
