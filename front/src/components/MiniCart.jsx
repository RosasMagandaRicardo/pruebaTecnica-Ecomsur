import React from "react";
const LOCAL_BACK = "http://localhost:5000";

const MiniCart = ({data}) => {
  const { name, image } = data;
  return (
    <div className="mini-item">
      <div className="mini-image-container">
        <img src={`${LOCAL_BACK + image}`} alt={name} />
      </div>
      <div className="mini-information-container">
        <p><span>Product: </span>{" " + name}</p>
      </div>
    </div>
  );
};

export default MiniCart;
