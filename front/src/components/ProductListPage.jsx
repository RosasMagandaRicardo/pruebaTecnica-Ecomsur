import React,{useEffect} from "react";

import NavigatorBarra from "./NavigatorBarra";
import ProductDisplayPage from "./ProductDisplayPage";
import FullPageProduct from "./FullPageProduct";
import { TYPES } from "../actions/shoppingAction";

import { BrowserRouter, Route, Switch } from "react-router-dom";

/* PROBANDO */
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/shoppingReducer";
import { useReducer } from "react";
/* CLOSE PROBANDO */

const ProductListPage = () => {
  /* PROBANDO */
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { productos, carrito, currentProd } = state;
  /* CLOSE PROBANDO */

  /*useEffect(() => {
    const data = localStorage.getItem("datos-carrito");
    if(data){
      data.map((dato)=>
      dispatch({ type: TYPES.ADD_TO_CART, payload: `${dato}_id`});
      )
    }
  })*/
  const addToCart = (_id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: _id });
  };

  const delFromCart = (_id, allScope = false) => {
    if (allScope) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: _id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: _id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const loadProd = (prod) => {
    dispatch({ type: TYPES.LOAD_CURRENT_PROD, payload: prod });
  };

  return (
   
    <BrowserRouter>
      <div className="container">
        <NavigatorBarra carrito={carrito}/>
        <Switch>
          <Route path={`/:id`}>
            <FullPageProduct prod={currentProd} addToCart={addToCart} />
          </Route>
          <Route path="/">
            <ProductDisplayPage
              state= {state}
              clearCart={clearCart}
              addToCart={addToCart}
              delFromCart={delFromCart}
              loadProd={loadProd}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default ProductListPage;
