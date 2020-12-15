import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../images/logo-buy.png";

function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={logo} />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type='text' />
          <h5>Password</h5>
          <input type='password' />
          <button className='login__SignInButton'> Sign In </button>
        </form>
        <button className='login__registerButton'>
          Create your Random Buy Account
        </button>
      </div>
    </div>
  );
}

export default Login;
