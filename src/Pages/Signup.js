import React, { useState } from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CreateAccount from "../SignupForms/CreateAccount";
import PersonalDetails from "../SignupForms/PersonalDetails";
import EducationalDetails from "../SignupForms/EducationalDetails";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(true);

  const nextStep = () => {
    setStep(step + 1);
  };
  const previousStep = () => {
    setStep(step - 1);
  };

  const renderSwitch = (step) => {
    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <CreateAccount
            nextStep={nextStep}
            previousStep={previousStep}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={nextStep}
            previousStep={previousStep}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            phone={phone}
            setPhone={setPhone}
          />
        );
     
      case 3:
        return (
          <EducationalDetails
            nextStep={nextStep}
            previousStep={previousStep}
            email={email}
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            password={password}
            isSignedUp={isSignedUp}
            setIsSignedUp={setIsSignedUp}
          />
        );
    }
  };

 
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
      <div class= "mainLeft col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div class="mainLeftContent d-md-none d-lg-block">
              <img src="Images/Sign Up Illustration.svg" alt="" />
              <p>
                  If you already have an account
                  <a href="/login"  className="login-underline">
                    <span className="blue"> Log in here</span>
                </a>
              </p>
        </div>
      </div>
      <div class="middleLine d-md-none d-lg-block"></div>
      <div class= "mainRight col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
      {renderSwitch(step)}
      </div>
    </div>
    </div>  

  );
};

export default Signup;
