import React from "react";
import "./Product.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue, StateContext } from "../StateProvider";

function Product({ id, title, price, rating, image, discount }) {
  const [{ basket }, dispatch] = useStateValue();
  //this function will run when the 'add to cart' button is clicked
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
        discount: discount
      }
    });
  };
  return (
    <div className="product">
      <div className="product__image-holder">{image}</div>
      <div className="product__title">{title}</div>
      <div className="product__price">${price}</div>
      <button className="product__addToCartBtn" onClick={addToCart}>
        <AddShoppingCartIcon />
      </button>
    </div>
  );
}

export default Product;
