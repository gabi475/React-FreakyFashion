import React from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import "./CategoriesList.css";
import { categories } from "../../../../util/constants";

export default function CategoriesList() {
  return (
    <div className="CategoriesList">
      {categories.slice(0, 3).map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          imgSrc={category.imgSrc}
          url={category.url}
        />
      ))}
    </div>
  );
}
