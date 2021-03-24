import React, { useState} from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import { AuthContext } from "../shared/context/auth-context";
// import { Auth } from "aws-amplify";
// import awsconfig from "../aws-exports";
import "./Login.css";
// Auth.configure(awsconfig);

const Login = () => {
  // const auth = useContext(AuthContext);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loginUsernameErr, setLoginUsernameErr] = useState({});
  const [loginPasswordErr, setLoginPasswordErr] = useState({});
 
  const handleLogin = () => {
    const isValid = formValidation();
    if (isValid) {
      alert('Logged in successfully!!');
    }
    // try {
    //   const user = await Auth.signIn(loginUsername, loginPassword);
    //   // console.log(user);
    //   // history.push("/dashboard");
    //   // const session = await Auth.currentSession();
    //   const userAuth = await Auth.currentAuthenticatedUser();
    //   auth.login();
    // } catch (error) {
    //   // console.log("error signing in", error);
    //   // alert(error.message);
    // }
  };

  const formValidation = () => {
    const loginUsernameErr = {};
    const loginPasswordErr = {};
    let isValid = true;
    const regex = /\S+@\S+\.\S+/;

    if (!loginUsername) {
      loginUsernameErr.fieldEmpty = "Username required";
      isValid = false;
    } else if (!regex.test(loginUsername)) {
      loginUsernameErr.invalidInput = "Enter a valid email address";
      isValid = false;
    } else {
      isValid = true;
    }

    if (!loginPassword) {
      loginPasswordErr.fieldEmpty = "Password required";
      isValid = false;
    }

    setLoginUsernameErr(loginUsernameErr);
    setLoginPasswordErr(loginPasswordErr);

    return isValid;
  }

  return (
    <div className="overlay container-fluid">
      <nav className="navbar navbarStyle">
        <div className="container-fluid">
          <Link to="/">
            <img
              src="Images/logo.png"
              alt="Kids Galaxy Logo"
              className="d-inline-block align-top nav-homeBtn-img"
            />
          </Link>
        </div>
      </nav>
      {/* <!-- Image and text -->
      {/* <img className="overlayImg" src="Images/Overlay Shapes.png" alt="" /> */}
      <div className="row mainContent">
        <div className="mainLeft col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="mainLeftContent">
            <img src="Images/Login Illustration.png" alt="" />
            <p>
              To get exciting discounts, offers, free study resources, special
              programs from Kids Galaxy
              <span className="blue"> Sign Up here.</span>
            </p>
          </div>
          <div className="middleLine"></div>
        </div>
        {/* mainLeft end */}


        <div className="mainRight col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="card loginCard">
            <div className="cardContent">
              <div className="title">
                <h1>Log in</h1>
              </div>
              <div className="inputs">
                <div className="input1">
                  <p>E-mail</p>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    onChange={(e) => setLoginUsername(e.target.value)}
                    value={loginUsername}
                  />
                  {Object.keys(loginUsernameErr).map((key) => {
                    return <div style={{color: 'red', fontSize: '14px'}}>
                      {loginUsernameErr[key]}
                    </div>
                  })}
                </div>
                <div className="input2">
                  <p>Password</p>
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                    value={loginPassword}
                  />
                  {Object.keys(loginPasswordErr).map((key) => {
                    return <div style={{color: 'red', fontSize: '14px'}}>
                      {loginPasswordErr[key]}
                    </div>
                  })}
                </div>
              </div>
              <div className="checkbox">
                <div className="rememberBox">
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>
                <p className="blue">Forgot Password</p>
              </div>
              <div className="login">
                <button className="loginBtn" onClick={handleLogin}>
                  Log in
                </button>
              </div>
              <div className="orLogin">
                <div className="hero">
                  <span className="hr"></span>
                  <p>Or log in using</p>
                  <span className="hr"></span>
                </div>
                <div className="faceG">
                  <img src="Images/fb.png" alt="" />
                  <img src="Images/google.png" alt="" />
                  <p>
                    New User?
                    <Link to="/signup">
                      <span className="blue"> Sign Up</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
