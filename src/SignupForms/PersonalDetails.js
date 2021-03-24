import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const PersonalDetails = ({
  nextStep,
  previousStep,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  phone,
  setPhone,
}) => {
  const [firstNameErr, setFirstNameErr] = useState({});
  const [lastNameErr, setLastNameErr] = useState({});
  const [phoneErr, setPhoneErr] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      nextStep();
    }
  };
  
  const formValidation = () => {
    const firstNameErr = {};
    const lastNameErr = {};
    const phoneErr = {};
    let isValid = true;
    const regex = /^[A-Za-z]+/;
    const regex_number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
    if (!firstName) {
      firstNameErr.fieldEmpty = "First Name Required"
      isValid = false;
    }else if (!regex.test(firstName.trim())) {
      firstNameErr.invalidInput = 'Enter a valid name';
      isValid = false;
    }else {
      isValid = true;
    }
    
    if (!lastName) {
      lastNameErr.fieldEmpty = "Last Name Required"
      isValid = false;
    }else if (!regex.test(lastName.trim())) {
      lastNameErr.invalidInput = 'Enter a valid name';
      isValid = false;
    }else {
      isValid = true;
    }

    if (!phone) {
      phoneErr.fieldEmpty = "Phone number required";
      isValid = false;
    } else if (!regex_number.test(phone.trim())) {
      phoneErr.invalidInput = "Invalid phone number";
      isValid = false;
    }else {
      isValid = true;
    }

    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    setPhoneErr(phoneErr);

    return isValid;

  };

  return (
    <div className="card loginCard">
      <div className="cardContent">
        <div className="title">
          <h1>Personal Details</h1>
        </div>
        <div className="inputs">
          <div className="CreateAccount-password-confirm">
            <div>
              <p>First Name</p>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              {Object.keys(firstNameErr).map((key) => {
                return <p style={{ color: 'red', fontSize:'14px'}}>
                  {firstNameErr[key]}
                </p>
              })}
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              {Object.keys(lastNameErr).map((key) => {
                return <p style={{color: 'red', fontSize:'14px' }}>
                  {lastNameErr[key]}
                </p>
              })}
            </div>
          </div>
          <div className="input2 personalDetails_1-inputs">
            <p>Mobile Number</p>
            <input
              type="text"
              className="personalDetails_1-mobile_numbers"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <select className="personalDetails_1-mobile_numbers_select">
              <option>+91</option>
              <option>+92</option>
              <option>+93</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
              <option>+94</option>
            </select>
            {Object.keys(phoneErr).map((key) => {
                return <p style={{color: 'red', fontSize:'14px', marginTop:'20px'}}>
                  {phoneErr[key]}
                </p>
              })}
          </div>
        </div>
        <div className="login personalDetails_1-loginBtnDiv">
          <button className="loginBtn backBtn" onClick={previousStep}>
            Back
          </button>
          <button className="loginBtn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <p >
          <input type="checkbox" id="accept-checkbox"/>
          I accept the
          <button class="terms-of-service" onClick={handleShow}>Terms of Service</button>
        </p>
        <div className="orLogin">
          <div className="hero">
            <span className="hr"></span>
            <p>Or signup using</p>
            <span className="hr"></span>
          </div>
          <div className="faceG">
            <img src="Images/fb.png" alt="" />
            <img src="Images/google.png" alt="" />
            <p>
              Already a member?
              <Link to="/signup">
                <span className="blue"> Log in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/*  card content  */}

    

    </div>
  );
};

export default PersonalDetails;
