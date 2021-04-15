import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard/ProductCard";

export default function ProductsGrid(props) {
  return (
    <div>
      <h1
        style={{
          padding: 10,
          backgroundColor: "lightblue",
          color: "red",
          textAlign: "center",
        }}
      >
        {props.title}
      </h1>
      <Grid container spacing={3}>
        {props.products.map((product) => (
          <Grid item xs={3} key={product.id}>
            <ProductCard
              title={product.title}
              description={product.description}
              imgSrc={product.imgSrc}
              url={product.url}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
