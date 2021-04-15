import React from "react";
import { useLocation } from "react-router-dom";
import { products, categories } from "../../../util/constants";
import Item from "./Item/Item";
import "./Search.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  let query = useQuery().get("q");
  let productsFound = [];
  const categoriesFound = categories.filter((category) =>
    category.title.toUpperCase().includes(query.toUpperCase())
  );
  productsFound.push(
    ...products.filter((product) =>
      product.title.toUpperCase().includes(query.toUpperCase())
    )
  );
  categoriesFound.forEach((category) => {
    productsFound.push(
      ...products.filter(
        (product) =>
          product.categoryId === category.id && !productsFound.includes(product)
      )
    );
  });

  return (
    <div className="search-container">
      {productsFound.map((product) => (
        <Item
          title={product.title}
          description={product.description}
          imgSrc={product.imgSrc}
          url={product.url}
        />
      ))}
    </div>
  );
}
