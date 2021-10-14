import NavigatorBarra from "./NavigatorBarra";
import ProductDisplayPage from "./ProductDisplayPage";


const ProductListPage = () => {
  return (
    <div className="container">
      <div>
        <NavigatorBarra />
      </div>
      <div>
        <ProductDisplayPage />

      </div>
    </div>
  );
};

export default ProductListPage;
