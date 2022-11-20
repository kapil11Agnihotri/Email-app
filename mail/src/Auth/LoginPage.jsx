import React from "react";
import { useRef } from "react";
import { useState } from "react";
import classes from "./LoginPage.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const location=useNavigate()
  const [isLogin, setIsLogin] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch=useDispatch()


  const submitHandler = async(event) => {
    event.preventDefault();
   const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const obj = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };
    let url;
    if (isLogin) {
       url= "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAzlDltNvPLoKlXAlDwATMMGK4puxBtk08"
    }else{
        url= "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAzlDltNvPLoKlXAlDwATMMGK4puxBtk08"
    }
        const response=await axios.post(url,obj)
        const data=await response.data
        dispatch(authActions.login(data.idToken))
        dispatch(authActions.email(enteredEmail))
        location('/Home')
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "SignUp"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Enter Email</label>
          <input type="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Enter Password</label>
          <input type="password" required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              setIsLogin((pre) => !pre);
            }}
            className={classes.toggle}
          >
            {isLogin
              ? "New User? Create new account"
              : "Existing User? Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
