import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart, user }] = useStateValue();
  return (
    <div className="checkout">
      {cart?.length === 0 ? (
        <div className="checkout__wrapper">
          <h2 className="checkout__heading">Shopping Cart</h2>
          <div className="checkout__cartEmpty">
            <div className="checkout__details">
              <img
                className="checkout__image"
                src="https://i.pinimg.com/originals/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg"
                alt="shopping cart-img"
              />
              <div className="checkout__description">
                Your shopping cart is empty
              </div>
              <Link to="/" className="checkout__button">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart__wrapper">
          <div className="cart__heading">
            <h3>Hello, {user?.email}</h3>
            <h2>Shopping cart</h2>
          </div>

          {cart?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          <div className="cart__total">
            <Subtotal />
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
