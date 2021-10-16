import { useEffect } from "react";

import ProductItem from "./ProductItem";
import { Link, useRouteMatch } from "react-router-dom";
import CartPage from "./CartPage";

const ProductDisplayPage = ({state,addToCart,clearCart,delFromCart,loadProd}) => {
  const { productos, carrito } = state;

  useEffect(() => {
    window.localStorage.setItem('datos-carrito', JSON.stringify(carrito))
  })

  return (
    <div className="items-cart">
      <article className="product-List-Page">
        {productos.map((product) => (
          <ProductItem
            key={product._id}
            data={product}
            addToCart={addToCart}
            loadToCart={loadProd}
            link={
              <Link to={`/product/${product._id}`} className="moreInformation" onClick={loadProd}>
                <span className="textButtonAdd">See More </span>
              </Link>
            }
          />
        ))}
      </article>
      <article className="product-List-Page-2">
      <h2>Shopping Cart</h2>
        <div className="button-clear">
          <button onClick={clearCart}>Clean Cart</button>
        </div>
        <div className="cart-items">
          {carrito.map((item, index) => (
            <CartPage key={index} state={state} data={item} delFromCart={delFromCart} />
          ))}
        </div>
      </article>
    </div>  
  );
};

export default ProductDisplayPage;
