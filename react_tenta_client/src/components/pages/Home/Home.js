import React from "react";
import CategoriesList from "./CategoriesList/CategoriesList";
import ProductsGrid from "../../shared/ProductsGrid/ProductsGrid";
import { products } from "../../../util/constants";
import ProductsCarousel from "./ProductsCarousel/ProductsCarousel";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <ProductsCarousel products={products.slice(0, 5)} />
      <CategoriesList />
      <ProductsGrid title="Popular products" products={products} />
    </div>
  );
}
