import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "../images/logo-buy.png";
// import {} from '../components/state-provider/StateProvider'
import { useStateValue } from "../StateProvider";
// firebase "dependencies"
// import {auth} from '../../firebase'

import "./Header.css";

function Header() {
  const [{ cart, user }] = useStateValue();
  // console.log(cart);
  // const login = ( )=>{
  //     if(user) {
  //         auth.signOut()
  //     }
  // }

  return (
    <nav className='header'>
      <div className='header__wrapper'>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='logo' />
        </Link>
        <Link to='/checkout' className='header__cartLink'>
          <div className='header__cart'>
            <ShoppingCartIcon className='header__cartIcon' />
            <div className='header__cartAmount'> {cart?.length} </div>
          
        </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
