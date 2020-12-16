import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import logo from "../images/logo-buy.png";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        //if the user is registered push us to the home page
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        //if the user is registered push us to the home page
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={logo} />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={SignIn} className='login__SignInButton'>
            {" "}
            Sign In{" "}
          </button>
        </form>
        <button
          type='submit'
          onClick={Register}
          className='login__registerButton'
        >
          Create your Random Buy Account
        </button>
      </div>
    </div>
  );
}

export default Login;
