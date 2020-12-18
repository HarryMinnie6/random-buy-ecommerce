import React from "react";
import { useStateValue } from "../StateProvider";

import { getCartTotal } from "../reducer";
import "./SubTotal.css";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ cart }] = useStateValue();

  return (
    <div>
      <div className="cart__details">
        <h3 className="cart__details-heading">Cart Summary</h3>
        <div className="cart__details-total-wrapper">
          <div className="cart__details-total">
            <strong> TOTAL:</strong>
            <p>( items: {cart.length} )</p>
          </div>
          <div className="cart__details-price"> ${getCartTotal(cart)} </div>
        </div>
        <button
          onClick={(e) => history.push("/payment")}
          className="cart__details-button"
        >
          {" "}
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}

export default Subtotal;
