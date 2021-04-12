import React, { useState, useContext } from "react";
import "../../css/login.css";
import { Link } from "react-router-dom";
import FormLogic from "./resetPasswordLogic";
import Validation from "./resetPasswordValidation";
import { AuthContext } from "../../context/AuthContext";

const ResetPassword = () => {
  let firebaseContext = useContext(AuthContext);
  let [submitted, setSubmitted] = useState(false);
  const [firebaseError, setFirebaseError] = useState(null);

  const formSubmitted = async () => {
    console.log("enter to form submitted reset password");
    setSubmitted(true);
    try {
      await firebaseContext.resetPassword(inputValues.useremail);
    } catch (error) {
      console.error("Authentication Error", error);
      setFirebaseError(error.message);
    }
  };

  const { handleInput, inputValues, handleSubmit, errors } = FormLogic(
    formSubmitted,
    Validation
  );

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-title">Reset Password</h1>
        {submitted ? (
          !firebaseError ? (
            <div
              className="error-message"
              style={{
                backgroundColor: "lightgreen",
                color: "green",
                height: "auto",
                width: "100%",
                textTransform: "uppercase",
                fontSize: "1.4rem",
                fontWeight: "600",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              check your email for instruction
            </div>
          ) : (
            <div
              className="error-message"
              style={{
                backgroundColor: "#ffc8db",
                color: "red",
                height: "auto",
                width: "100%",
                textTransform: "uppercase",
                fontSize: "1.4rem",
                fontWeight: "600",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {firebaseError}
            </div>
          )
        ) : null}
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

          <button className="form-input-btn" type="submit" disabled={submitted}>
            Reset Password
          </button>
          <p>
            <Link to="/" className="sign-up">
              Login
            </Link>
          </p>
        </form>
      </div>
      <p className="need-an-account">
        Need an account?{" "}
        <span>
          <Link to="/sign-up" className="sign-up">
            SignUp
          </Link>
        </span>
      </p>
    </div>
  );
};
export default ResetPassword;
