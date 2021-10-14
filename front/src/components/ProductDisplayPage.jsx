import React from "react";
import ProductItem from "./ProductItem";

const ProductDisplayPage = ({ data, addToCart }) => {
  const { product } = data;
  return (
    <div>
      <h1>ProductDisplayPage</h1>
      
    </div>
  );
  
};

export default ProductDisplayPage;

/*
<article>
        {product.map((prod) => {
          <ProductItem key={prod.id} data={data} addToCart={addToCart} />;
        })}
      </article>
*/