import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../images/logo-buy.png";
// import {} from '../components/state-provider/StateProvider'
import { useStateValue } from "../StateProvider";
// firebase "dependencies"
import { auth } from "../firebase";

import "./Header.css";

function Header() {
  const [{ cart, user }] = useStateValue();
  // console.log(cart);
  // const login = ( )=>{
  //     if(user) {
  //         auth.signOut()
  //     }
  // }
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <div className="header__wrapper">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <div className="header__right">
          <div className="header__userInfoDisplay">
            <Link className="header__loginLink" to={!user && "/login"}>
              <div onClick={handleAuthentication}>
                Hello {user?.email ? user?.email : "Guest"}
              </div>
              <div>
                {user ? <strong>Sign Out</strong> : <strong>Sign In</strong>}
              </div>
            </Link>
          </div>

          <Link to="/checkout" className="header__cartLink">
            <div className="header__cart">
              <ShoppingCartIcon className="header__cartIcon" />
              <div className="header__cartAmount"> {cart?.length} </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
