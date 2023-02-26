import React, { useContext, useRef } from "react";
import "./login.css";
import { login } from "../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
export default function Login() {
  const { isFetching, dispatch } = useContext(AuthContext);
  let email = useRef(),
    password = useRef();
  const formHandler = (e) => {
    e.preventDefault();
    login(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Memories</h3>
          <div className="loginDesc">
            Connect with friends, create and share memories.
          </div>
        </div>
        <div className="loginRight">
          <form onSubmit={formHandler} className="loginBox">
            <input
              required
              ref={email}
              placeholder="Email"
              minLength="6"
              type="email"
              className="loginInput"
            />
            <input
              required
              minLength="6"
              ref={password}
              placeholder="Password"
              type="password"
              className="loginInput"
            />
            <button disabled={isFetching} type="submit" className="loginButton">
              {isFetching ? <CircularProgress color="white" /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button
              disabled={isFetching}
              type="button"
              className="loginRegisterButton"
            >
              {isFetching ? (
                <CircularProgress color="white" />
              ) : (
                "Create a new Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
