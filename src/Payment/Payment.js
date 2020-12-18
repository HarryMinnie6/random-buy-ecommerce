import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { useStateValue } from "../StateProvider";

import "./Payment.css";

function Payment() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>42069 React lane</p>
            <p>Cape Town</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <h3>Payment Method</h3>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
