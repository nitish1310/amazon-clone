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
import { useStateValue } from "./StateProvider";

function ProductList({
  productList: { id, title, price, description, category, image, rating },
  i,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = ({ productList, id, title, image, price, rating }) => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
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
      <button onClick={addToBasket}>Add to Basket</button>
      {/* <button onClick={addToBasket}>Add to Basket</button> */}
    </div>
  );
}

export default ProductList;
