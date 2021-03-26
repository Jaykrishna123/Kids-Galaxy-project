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

        <form>
        <span>
            <label
              for="fname"
              class="text-small-uppercase"
              style={firstName ? { transform: "translate(0,0)" } : null}
            >
              First Name
            </label>
            <input
              class="text-body"
              id="fname"
              name="fname"
              type="text"
              required
              onChange={(e) => setFirstName(e.target.value)} />
            {Object.keys(firstNameErr).map((key) => {
                return <p style={{ color: 'red', fontSize:'14px'}}>
                  {firstNameErr[key]}
                </p>
              })}
        </span>
        <span>
            <label
              for="lname"
              class="text-small-uppercase"
              style={lastName ? { transform: "translate(0,0)" } : null}
            >
              Last Name
            </label>
            <input
              class="text-body"
              id="lname"
              name="lname"
              type="text"
              required
              onChange={(e) => setLastName(e.target.value)} />
              {Object.keys(lastNameErr).map((key) => {
                return <p style={{color: 'red', fontSize:'14px' }}>
                  {lastNameErr[key]}
                </p>
              })}
        </span>
        <span>
            <label
              for="mobile"
              class="text-small-uppercase"
              style={phone ? { transform: "translate(0,0)" } : null}
            >
              Mobile Number
            </label>
            <input
              class="text-body"
              id="mobile"
              name="mobile"
              type="text"
              required
              onChange={(e) => setPhone(e.target.value)} />
            {Object.keys(phoneErr).map((key) => {
                return <p style={{color: 'red', fontSize:'14px', marginTop:'20px'}}>
                  {phoneErr[key]}
                </p>
              })}
        </span>
        <div>
          {/* <Link to='/createaccount'> */}
          <span class="buttons">
          <button type="button" class="btn btn-sm text-small-uppercase-button login_btn back_btn" id="submit" onClick={previousStep}>Back</button>
          </span>
          {/* </Link> */}
          <Link to='/educationaldetails'>
          <span>
          <button type="button" class="btn btn-sm text-small-uppercase-button login_btn back_btn" id="submit" onClick={handleSubmit}>Next</button>
          </span>
          </Link>
      </div>
      </form>
        {/* <div className="login personalDetails_1-loginBtnDiv">
          <button className="loginBtn backBtn" onClick={previousStep}>
            Back
          </button>
          <button className="loginBtn" onClick={handleSubmit}>
            Submit
          </button>
        </div> */}
        {/* <p >
          <input type="checkbox" id="accept-checkbox"/>
          I accept the
          <button class="terms-of-service">Terms of Service</button>
        </p> */}
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
