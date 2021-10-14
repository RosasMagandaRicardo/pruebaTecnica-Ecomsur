import React from 'react'
import MiniCart from "./MiniCart";

const NavigatorBarra = () => {
    return (
        <nav>
            <h1>NavigatorBarra</h1>
            <div className="content">
                <div className="logo">
                    <h3>Logo</h3>
                </div>
                <div className="mini-cart">
                <MiniCart/>
                </div>
            </div>
        </nav>
    )
}

export default NavigatorBarra
