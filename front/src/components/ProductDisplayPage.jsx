import { useReducer } from "react";
import ProductItem from "./ProductItem";
import FullPageProduct from "./FullPageProduct";
import { Link, useRouteMatch } from "react-router-dom";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/shoppingReducer";
import CartPage from "./CartPage";
import { TYPES } from "../actions/shoppingAction";

const ProductDisplayPage = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { productos, carrito } = state;

  const addToCart = (_id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: _id });
  };

  const delFromCart = (_id,allScope=false) => {
    if(allScope){
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: _id });
    } else{
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: _id });
    }
  };

  const clearCart = () => {
    dispatch({type: TYPES.CLEAR_CART})
  };

  return (
    <div className="items-cart">
      <article className="product-List-Page">
        {productos.map((product) => (
          <ProductItem
            key={product._id}
            data={product}
            addToCart={addToCart}
            link={
              <Link to={product._id} className="moreInformation">
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
            <CartPage key={index} data={item} delFromCart={delFromCart} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default ProductDisplayPage;
