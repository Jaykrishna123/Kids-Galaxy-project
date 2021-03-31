import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseForm from '../SignupForms/CreateUseFrom'
import validate from '../SignupForms/CreateAccountValidation';

import "./Signup.css";
const CreateAccount = (
   {nextStep},
  // previousStep,
  // email,
  // setEmail, 
  // password,
  // setPassword,
) => {
  const [email,setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirmpassword, setConfirmPassword] = useState(false);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = UseForm(login, validate);

  function login() {
    nextStep();
  }

  


  // const [emailErr, setEmailErr] = useState({});
  // const [passwordErr, setPasswordErr] = useState({});

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const isValid = formValidation();
  //   if (isValid) {
  //     nextStep();
  //   }
  // };

  // const formValidation = () => { 
  //   const emailErr = {};
  //   const passwordErr = {};
  //   let isValid = true;
  //   const regex_email = /\S+@\S+\.\S+/;
  //   const regex_password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  //   if (!email) {
  //     emailErr.fieldEmpty = "Enter an email";
  //     isValid = false;  
  //   } else if (!regex_email.test(email)) {
  //     emailErr.invalidEmail = "Email invalid";
  //     isValid = false;
  //   } else {
  //     isValid = true;
  //   }

  //   if (!password) {
  //     passwordErr.fieldEmpty = 'Password is required';
  //     isValid = false;
  //   }
  //   if (!regex_password.test(password)) {
  //     passwordErr.lengthErr = `Must contain one uppercase, one symbol, one number and 8 digits long`;
  //     isValid = false;
  //   }else {
  //     isValid = true;
  //   }
    
  //   if (!confPassword) {
  //     passwordErr.fieldEmpty = 'Password is required';
  //     isValid = false;
  //   }else if (password !== confPassword) {
  //     passwordErr.notMatchingPassword = 'Passwords do not match';
  //     isValid = false;
  //   }else {
  //     isValid = true;
  //   }

  //   setEmailErr(emailErr);
  //   setPasswordErr(passwordErr);
    
  //   return isValid;

  // };


//   const changeStyles = () => {
//     let element = document.getElementsByTagName('label')
//     ReactDOM.findDOMNode(element).style.transform = this.state.isClicked? translate(0,0) : null
// }

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
                  className={`text-small-uppercase ${errors.email && "is-danger"}`}
                  style={email ? { transform: "translate(0,0)" } : null}
                  // onClick={changeStyles}
                >
                  Email
                </label>
                <input
                  class={`text-body ${errors.email && "is-danger"}`}
                  type="email" name="email" id="email" onChange={handleChange} value={values.email || ''} required
                  onClick={() => setEmail(!email)}/>
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                 
              </span>
          
              <span>
                <label
                  for="password"
                  className={`text-small-uppercase ${errors.password && "is-danger"}`}style={password ? { transform: "translate(0,0)" } : null}
                >
                  Password
                </label>
                <input
                class={`text-body loginInput ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required
                  onClick={() => setPassword(!password)} />
                  {errors.password && (
                    <p className="help is-danger">{errors.password}</p>
                  )}
               
              </span>

              <span>
                <label
                  for="confPassword"
                  className={`text-small-uppercase ${errors.confirmpassword && "is-danger"}`}
                >
                  Confirm Password
                </label>
                <input
                class={`text-body loginInput ${errors.confirmpassword && 'is-danger'}`} type="password" name="confirmpassword" onChange={handleChange} value={values.confirmpassword || ''} required
                onClick={() => setConfirmPassword(!confirmpassword)} />
                {errors.confirmpassword && (
                  <p className="help is-danger">{errors.confirmpassword}</p>
                )}
                  
              </span>
              <div class="checkbox edu_checkbox">
                  <div class="rememberBox">
                    <input type="checkbox" id="accept-checkbox"/>
                      <p class="blue">
                      I accept the 
                      <button class="terms-of-service">Terms of Service</button>
                      </p>
                  </div>
              </div>
          
              
              <span>
              <Link to='/personaldetails'>
                <button onClick={handleSubmit} noValidate type="submit" class="btn btn-sm text-small-uppercase-button login_btn">Next</button>
              </Link>  
              </span>           
            </form>

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
