import { Button } from "@material-ui/core";
import React from "react";
import "./Item.css";

export default function Item(props) {
  const { title, description, imgSrc, url } = props;

  return (
    <div className="search-item">
      <img src={imgSrc} />
      <div className="search-item-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <Button href={url}>View</Button>
      </div>
    </div>
  );
}
