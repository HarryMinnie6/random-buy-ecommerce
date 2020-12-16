import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import { auth } from "../firebase";

function App() {
  // useEffect() will only run once when the app component loads
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is --->", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
      } else {
        // the user is logged out
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>

        <Route path='/login'>
          <Header />
          <Login />
        </Route>

        <Route path='/'>
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
