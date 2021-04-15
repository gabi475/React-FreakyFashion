import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item/Item";
import "./ProductsCarousel.css";

export default function ProductsCarousel(props) {
  const { products } = props;

  return (
    <Carousel pagination={false} className="carousel-container">
      {products.map((product) => (
        <Item
          key={product.id}
          title={product.title}
          description={product.description}
          imgSrc={product.imgSrc}
          url={product.url}
        />
      ))}
    </Carousel>
  );
}
