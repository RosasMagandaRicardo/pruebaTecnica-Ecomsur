import React from "react";
import MiniCart from "./MiniCart";

const NavigatorBarra = () => {
  return (
    <nav className="navbar">
        <div className="logo">
          <h3><a href="/">Logo</a></h3>
        </div>
        <div className="mini-cart">
          <MiniCart />
        </div>
    </nav>
  );
};

export default NavigatorBarra;
