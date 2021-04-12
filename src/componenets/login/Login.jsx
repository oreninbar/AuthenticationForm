import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FormLogic from "./formLogic";
import Validation from "./formValidation";
import "../../css/login.css";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Form = () => {
  let history = useHistory();
  let firebaseContext = useContext(AuthContext);
  const [firebaseError, setFirebaseError] = useState(null);

  const formSubmitted = async () => {
    try {
      let response = await firebaseContext.login(
        inputValues.useremail,
        inputValues.userpassword
      );
      if (response) history.replace("/profile", inputValues);
    } catch (err) {
      console.error("Authentication Error", err);
      setFirebaseError(err.message);
    }
  };

  const { handleInput, inputValues, handleSubmit, errors } = FormLogic(
    formSubmitted,
    Validation
  );

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-title">Log In</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="userEmail" className="form-label email">
            Email
          </label>
          <input
            name="useremail"
            className="form-input"
            placeholder="Enter your email"
            onChange={handleInput}
            values={inputValues.useremail}
          />
          {errors.useremail && (
            <p className="error-message">
              <span id="Asterisk">*</span>
              {errors.useremail}
            </p>
          )}
          <label htmlFor="userpassword" className="form-label password">
            Password
          </label>
          <input
            type="text"
            name="userpassword"
            className="form-input"
            placeholder="Enter your password"
            onChange={handleInput}
            values={inputValues.userpassword}
          />
          {firebaseError && (
            <p className="error-message">
              <span id="Asterisk">*</span>
              {firebaseError}
            </p>
          )}

          {errors.userpassword && (
            <p className="error-message">
              <span id="Asterisk">*</span>
              {errors.userpassword}
            </p>
          )}

          <button className="form-input-btn" type="submit">
            Login
          </button>
          <p>
            <Link to="/reset-password" className="forgot-password">
              Forgot Password
            </Link>
          </p>
        </form>
        <p className="need-an-account">
          Need an account?{" "}
          <span>
            <Link to="/sign-up" className="sign-up">
              SignUp
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default Form;
