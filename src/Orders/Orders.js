import React from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

function Orders() {
  return <div className='orders'>
  

  <div className="checkout__cartEmpty">
  <div className="checkout__details">
  <h1 className="orders-description"> Thank you for your purchase</h1>
    <div className="checkout__description orders-description">
      We will contact you shortly to confirm your order.
    </div>
    <Link to="/" className="checkout__button">
      Continue Shopping
    </Link>
  </div>
</div>
  </div>;
}

export default Orders;
