import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/config";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function signIn(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  }
  function register(e) {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg"
          alt=""
          className="login-logo"
        />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login-signinButton">
            Sign in
          </button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
          <strong>(This is a fake clone of Amazon)</strong>
        </p>
        <button onClick={register} className="login-registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
