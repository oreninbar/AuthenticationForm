import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const location = useLocation();
  const firebaseContext = useContext(AuthContext);


  function disconnect() {
    let response=firebaseContext.logout()
    console.log(response);
  }
  
  return (
    <div>
      <div className="form-container">
        <div className="form-wrapper">
          <h1 className="form-title">Profile</h1>
          <br />
          <div className="user-data">
            <h3 className="email"> {location.state.useremail}</h3>
            <h3 className="password"> {location.state.userpassword}</h3>
          </div>
          <form className="form">
            <button className="form-input-btn" type="submit">
              send
            </button>
            <p>
              <Link to="/" className="log-out" onClick={disconnect}>
                log Out{" "}
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
    </div>
  );
}
