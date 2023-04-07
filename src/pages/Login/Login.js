import React from "react";
import style from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    localStorage.setItem("token", "Wookie2019");
    navigate("/movies");
  };

  return (
    <div className={style.container}>
      <div className={style.loginContainer}>
        <h1>Welcome</h1>
        <h3>Sign in using</h3>
        <div className={style.inputContainer}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email"></input>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="email">Password</label>
          <input type="text" id="email" name="email"></input>
        </div>
        <div className={style.checkboxContainer}>
          <div>
            <input
              type="checkbox"
              id="remember"
              name="remember"
              value="remember"
            />
            <label for="remember">Remember me</label>
          </div>
          <p>Reset Password</p>
        </div>
        <div className={style.buttonContainer}>
          <button onClick={handleNavigate}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
