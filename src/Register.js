import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Register() {
  //programatically chnage URL
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const signIn = (e) => {
  //     e.preventDefault();

  //     auth
  //       .signInWithEmailAndPassword(email, password)
  //       .then((auth) => {
  //         history.push("/");
  //       })
  //       .catch((error) => alert(error.message));
  //   };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //It successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="register__container">
        <h1>Create account</h1>

        <form>
          <h5>Your name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h5>Email</h5>
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

          <h5>Re-enter password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button> */}
        </form>

        <button
          type="submit"
          onClick={register}
          className="register__createButton"
        >
          Create your Amazon Account
        </button>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale.
        </p>
        <div className="register__signIn">
          <hr />
          <small>
            Already have an account? <Link to="/login">Sign-In</Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Register;
