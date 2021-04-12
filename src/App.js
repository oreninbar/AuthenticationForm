import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./componenets/login/Login.jsx";
import SignUp from "./componenets/signup/SignUp";
import ResetPassword from "./componenets/resetpassword/ResetPassword";
import Profile from "./componenets/profile/Profile";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route path="/" exact render={() => <Login />}></Route>
            <Route path="/sign-up" render={() => <SignUp />}></Route>
            <Route
              path="/reset-password"
              render={() => <ResetPassword />}
            ></Route>
            <Route path="/profile" render={() => <Profile />}></Route>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;