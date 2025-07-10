import ProductsScreen from "@/components/screens/products/products";
import React from "react";

const ProductsPage = ({ cartItems, addToCart }) => {
  return <ProductsScreen addToCart={addToCart} cartItems={cartItems} />;
};

export default ProductsPage;
