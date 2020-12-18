import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useElements, useStripe } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HzgknDGOy5si9f7qvcWpHNgXGQmscbyNJp6Ha7utFLmSubyE1A8J3V2gTlQAp6jNDUxkDr948oTX7sm74kAMFNL00JWOFySvR"
);

function App() {
  const [{}, dispatch] = useStateValue();

  // useEffect() will only run once when the app component loads
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is --->", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/login">
          <Header />
          <Login />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
