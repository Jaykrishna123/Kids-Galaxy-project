import React, { useState } from "react";
import { Link } from "react-router-dom";


import "./Signup.css";
const CreateAccount = ({
  nextStep,
  previousStep,
  email,
  setEmail, 
  password,
  setPassword,
}) => {

  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      nextStep();
    }
  };

  const formValidation = () => { 
    const emailErr = {};
    const passwordErr = {};
    let isValid = true;
    const regex_email = /\S+@\S+\.\S+/;
    const regex_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!email) {
      emailErr.fieldEmpty = "Enter an email";
      isValid = false;  
    } else if (!regex_email.test(email)) {
      emailErr.invalidEmail = "Email invalid";
      isValid = false;
    } else {
      isValid = true;
    }

    if (!password) {
      passwordErr.fieldEmpty = 'Password is required';
      isValid = false;
    }else if (!regex_password.test(password)) {
      passwordErr.lengthErr = `Must contain one uppercase, one symbol, one number and 8 digits long`;
      isValid = false;
    }else {
      isValid = true;
    }
    
    if (!confPassword) {
      passwordErr.fieldEmpty = 'Password is required';
      isValid = false;
    }else if (password !== confPassword) {
      passwordErr.notMatchingPassword = 'Passwords do not match';
      isValid = false;
    }else {
      isValid = true;
    }

    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    
    return isValid;

  };

  const [confPassword, setConfPassword] = useState("");

  return (
    <div className="card loginCard">
      <div className="cardContent">
        <div className="title">
          <h1>Create Account</h1>
        </div>


        <form>
              <span>
                <label
                  for="email"
                  class="text-small-uppercase"
                  style={email ? { transform: "translate(0,0)" } : null}
                >
                  Email
                </label>
                <input
                  class="text-body"
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)} />
                  {Object.keys(emailErr).map((key) => {
                    return <div style={{color: 'red', fontSize:'14px'}}>
                    {emailErr[key]}
                    </div>
                  })}
              </span>
          
              <span>
                <label
                  for="password"
                  class="text-small-uppercase"
                  style={password ? { transform: "translate(0,0)" } : null}
                >
                  Password
                </label>
                <input
                  class="text-body"
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                {Object.keys(passwordErr).map((key) => {
                  return <p style={{color: 'red', fontSize:'14px', marginTop:'0px'}}>
                    {passwordErr[key]}
                  </p>
                })}
              </span>

              <span>
                <label
                  for="confPassword"
                  class="text-small-uppercase"
                  style={confPassword ? { transform: "translate(0,0)" } : null}
                >
                  Confirm Password
                </label>
                <input
                  class="text-body"
                  id="confPassword"
                  name="confPassword"
                  type="password"
                  required
                  onChange={(e) => setConfPassword(e.target.value)} />
                  {Object.keys(passwordErr).map((key) => {
                    return <div style={{color: 'red', fontSize:'14px', marginTop:'0px'}}>
                      {passwordErr[key]}
                    </div>
                  })}
              </span>
              
              <Link to='/personaldetails'>
              <span>
                {/* <input class="text-small-uppercase-button" id="submit" type="submit" value="Submit"/> */}
                <button type="button" class="btn btn-sm text-small-uppercase-button login_btn" id="submit">Next</button>
              </span>
              </Link>             
            </form>
        <p >
          <input type="checkbox" id="accept-checkbox"/>
          I accept the
          <button class="terms-of-service" onClick={handleShow}>Terms of Service</button>
        </p>
        {/* <div className="checkbox">
          <div className="rememberBox">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <p className="blue">Forgot Password</p>
        </div> */}
        <div className="login">
        <Link to='/personaldetails'>
        <button
            className="loginBtn"
            onClick={handleSubmit}
            // disabled={
            // (!password && !confPassword) || password !== confPassword
            // }
          >
            Submit
          </button>
        </Link>
          
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
      {/*  card content  */}

      
    </div>
  );
};

export default CreateAccount;
