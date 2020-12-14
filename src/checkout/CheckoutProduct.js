import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./Checkout.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    // <div className='cart__wrapper'>
    <div className='cart__contents'>
      <div className='cart__item'>
        <div className='product__image-holder'>{image}</div>
        <div className='cart-description'>
          <h3>{title}</h3>
          <p>${price}</p>
          <button className='remove-button' onClick={removeFromCart}>
            Remove Item
          </button>
        </div>
      </div>
    </div>

    // </div>
  );
}

export default CheckoutProduct;
