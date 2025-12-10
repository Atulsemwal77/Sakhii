import React from "react";


import {
  sanitaryProducts,
  herbalProducts,
} from "../data/products";
import ProductSection from "./ProductSection";

const ProductsPage = () => {
  return (
    <div>
      <ProductSection
        title="Sanitary Products"
        products={sanitaryProducts}
      />

      <ProductSection
        title="Herbal Products"
        products={herbalProducts}
      />
    </div>
  );
};

export default ProductsPage;
