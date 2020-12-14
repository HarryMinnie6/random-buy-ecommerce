import React from "react";
import { useStateValue } from "../StateProvider";

import { getCartTotal } from "../reducer";
import "./SubTotal.css";

function Subtotal() {
  const [{ cart }] = useStateValue();

  return (
    <div>
      <div className='cart__details'>
        <h3 className='cart__details-heading'>Cart Summary</h3>
        <div className='cart__details-total-wrapper'>
          <div className='cart__details-total'>
            <strong> TOTAL:</strong>
            <p>( items: {cart.length} )</p>
          </div>
          <div className='cart__details-price'> ${getCartTotal(cart)} </div>
        </div>
        <button className='cart__details-button'> Proceed To Checkout</button>
      </div>
    </div>
  );
}

export default Subtotal;
