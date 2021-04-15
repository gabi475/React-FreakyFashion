import React from "react";
import { products } from "../../../util/constants";
import ProductGrid from "../../shared/ProductsGrid/ProductsGrid";
import "./Products.css";
import { Button } from "@material-ui/core";

export default function Products(props) {
  const productId = props.match.params.id;
  const myProduct = products.find((product) => product.id == productId);
  const recomandedProducts = products.slice(0, 4);

  return (
    <div>
      <div className="ProductContainer">
        <img src={myProduct.imgSrc} />
        <div className="ProductInfo">
          <h1>{myProduct.title}</h1>
          <p>Art.nr: {myProduct.artNr}</p>
          <p>{myProduct.description}</p>
          <p>{myProduct.price} SEK</p>
          <Button>Buy</Button>
        </div>
      </div>
      <ProductGrid title="Recomanded for you" products={recomandedProducts} />
    </div>
  );
}
