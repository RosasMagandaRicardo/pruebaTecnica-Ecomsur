import { useReducer } from "react";
import NavigatoratorBarra from "./NavigatorBarra";
import ProductDisplayPage from "./ProductDisplayPage";
import CartPage from "./CartPage";
import {shoppingInitialState, shoppingReducer } from "../reducer/shoppingReducer";
import ProductItem from "./ProductItem";

const ProductListPage = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)
  const {productos,carrito} = state;

  const addToCart = (_id) => {
    console.log(_id);
  }

  return (
    <div>
      <NavigatoratorBarra />
      <h1>ProductListPage</h1>
      <article className="product-List-Page">
      {productos.map((product) => (
        <ProductItem key={product._id} data={product} addToCart={addToCart}/>
      ))}
      
      </article>
      {/*<ProductDisplayPage data={productos} tama={productos.length} addToCart={addToCart}/>*/}
      <CartPage />
    </div>
  );
};

export default ProductListPage;
