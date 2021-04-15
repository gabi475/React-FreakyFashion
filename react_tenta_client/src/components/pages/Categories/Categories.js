import React from "react";
import ProductsGrid from "../../shared/ProductsGrid/ProductsGrid";
import { categories, products } from "../../../util/constants";

export default function Categories(props) {
  const categoryId = props.match.params.id;
  const category = categories.find((category) => category.id == categoryId);
  const categoryProducts = products.filter(
    (product) => product.categoryId == categoryId
  );

  return (
    <div>
      <ProductsGrid title={category.title} products={categoryProducts} />
    </div>
  );
}
