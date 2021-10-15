import { useReducer } from "react";
import MiniCart from "./MiniCart";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducer/shoppingReducer";

const NavigatorBarra = () => {
  const [state] = useReducer(shoppingReducer, shoppingInitialState);
  const { carrito } = state;

  return (
    <nav className="navbar">
        <div className="logo">
          <h3><a href="/">Logo</a></h3>
        </div>
        <div className="mini-cart">
          <MiniCart/>
        </div>
    </nav>
  );
};

export default NavigatorBarra;
