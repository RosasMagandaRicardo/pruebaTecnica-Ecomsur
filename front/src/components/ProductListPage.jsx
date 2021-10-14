import { useReducer } from "react";
import NavigatoratorBarra from "./NavigatorBarra";
import ProductDisplayPage from "./ProductDisplayPage";
import CartPage from "./CartPage";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/shoppingReducer";
import ProductItem from "./ProductItem";

import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import FullPageProduct from "./FullPageProduct";

const ProductListPage = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { productos, carrito } = state;

  const addToCart = (_id) => {
    console.log(_id);
  };

  return (
    <div>
      <NavigatoratorBarra />
      <h1>ProductListPage</h1>
      <article className="product-List-Page">
        {productos.map((product) => (
          <BrowserRouter>
            <ProductItem key={product._id} data={product} addToCart={addToCart} link={<Link to={"/"+`${product._id}`} className="moreInformation"><span className="textButtonAdd">See More </span></Link>}/>
            <Switch>
              <Route path={"/" + `${product._id}`}>
                <FullPageProduct data={product} />
              </Route>
            </Switch>
          </BrowserRouter>
        ))}
      </article>
      <CartPage />
    </div>
  );
};

export default ProductListPage;
