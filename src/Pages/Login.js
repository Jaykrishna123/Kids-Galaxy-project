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

<div>
      <div class="green-bg"></div>                                            
    <div class="white-bg"></div>

    <div class="container-fluid">
        <div class="row nav-bar">
            <div class="col-3 nav-left">
            <Link to="/">
                <img src="Images/navbar logo.svg" alt="kg-logo" class="nav-logo" />
            </Link>
            </div>
        </div>
    </div>

      <div class="row container-fluid mainContent">
        <div class= "mainLeftLogin col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div class="mainLeftContentLogin d-md-none d-lg-block">
                <img src="Images/Login Illustration.svg" alt="" />
                <p>
                  To get exciting discounts, offers, free study resources, <br /> special
                  programs from Kids Galaxy
                  <span class="blue"> Sign Up here.</span>
                </p>
          </div>
        </div>
        <div class="middleLineLogin d-md-none d-lg-block"></div>
        <div class= "mainRightLogin col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div class="card loginCardLogin">
            <div class="cardContentLogin">
              <div class="title">
                <h1>Log In</h1>
              </div>
              <form>
                <span>
                  <label for="email" class="text-small-uppercase-login loginLabel"
                   style={loginUsername ? {transform: 'translate(0,0)'} : null} >Email</label>
                 <input class="text-body loginInput" id="email" name="email" type="email" required
                    onChange={(e) => setLoginUsername(e.target.value)} />
                  {Object.keys(loginUsernameErr).map((key) => {
                    return <div style={{color: 'red', fontSize: '14px'}}>
                      {loginUsernameErr[key]}
                    </div>
                  })}
                </span>
                <span>
                  <label for="password" class="text-small-uppercase-login loginLabel"
                     style={loginPassword ? {transform: 'translate(0,0)'} : null} >Password</label>
                  <input class="text-body loginInput" id="password" name="password" type="password" required
                    onChange={(e) => setLoginPassword(e.target.value)} />
                  {Object.keys(loginPasswordErr).map((key) => {
                    return <div style={{color: 'red', fontSize: '14px'}}>
                      {loginPasswordErr[key]}
                    </div>
                  })}
                </span>
                <div class="checkbox">
                  <div class="rememberBox">
                    <input type="checkbox" />
                    <p class="blue">Remember me</p>
                  </div>
                  <p class="blue">Forgot Password</p>
                </div>
                <span>
                  {/* <input class="text-small-uppercase-button" id="submit" type="submit" value="Login" /> */}
                  <button type="button" class="btn btn-sm text-small-uppercase-button-login login_btn" id="submit" onClick={handleLogin}>Login</button>
                </span>
              </form>

              <div class="orLogin">
                <div class="hero">
                  <span class="hr"></span>
                  <p>Or log in using</p>
                  <span class="hr"></span>
                </div>
                <div class="faceG">
                  <img src="Images/Facebook.svg" alt="" />
                  <img src="Images/Gmail Icon.svg" alt="" />
                  <p>
                    New User?
                    <a href="{}">
                      <Link to='/signup'>
                      <span class="blue"> Sign Up</span>
                      </Link>
                    </a>
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
