import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../reducer";
import axios from "../axios";
import { db } from "../firebase";
import "./Payment.css";

function Payment() {
  const [{ cart, user }] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceedd] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  //----- when ever the cart changes it will make this request and make the stripe request to get the clientSecret 'token' which allows us to charge the customer the correct amount.
  useEffect(() => {
    //generate special stripe secret token, which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies subunits
        url: `/payment/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  console.log("the secret is", clientSecret);

  //-----
  const handleSubmit = async (event) => {
    event.preventDefault();
    //all the stripe stuff
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        // db.collection("users")
        //   .doc(user?.uid)
        //   .collection("orders")
        //   .doc(paymentIntent.id)
        //   .set({
        //     cart: cart,
        //     amount: paymentIntent.amount,
        //     created: paymentIntent.created
        //   }); 

        setSucceedd(true);
        setError(false);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    //listen for changes in the card elements and listen for errors in card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const [{}, dispatch] = useStateValue();
  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'> {cart?.length} items </Link>)
        </h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>111 React lane</p>
            <p>Cape Town</p>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment__items'>
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
        <div className='payment__section'>
          <h3>Payment Method</h3>
          <div className='payment__details'>
            <div className='cardElement__holder'>
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className='payment__priceContainer'>
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>Order Total: {value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
