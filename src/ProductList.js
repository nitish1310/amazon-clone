import React from "react";
import "./ProductList.css";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

function ProductList({
  productList: { id, title, price, description, category, image, rating },
  i,
}) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
      {/* <button onClick={addToBasket}>Add to Basket</button> */}
    </div>
  );
}

export default ProductList;
