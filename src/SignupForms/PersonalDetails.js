import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import UseForm from '../SignupForms/CreateUseFrom'
import validate from '../SignupForms/PersonalDetailsValidation';

const PersonalDetails = ({
  nextStep,
  previousStep,
  
}) => {
  const [firstName,setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(false);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = UseForm(login, validate);

  function login() {
    nextStep();
  }


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const isValid = formValidation();
  //   if (isValid) {
  //     nextStep();
  //   }
  // };
  
  // const formValidation = () => {
  //   const firstNameErr = {};
  //   const lastNameErr = {};
  //   const phoneErr = {};
  //   let isValid = true;
  //   const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  //   const regex_number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
  //   if (!firstName) {
  //     firstNameErr.fieldEmpty = "First Name Required"
  //     isValid = false;
  //   }else if (!regex.test(firstName.trim())) {
  //     firstNameErr.invalidInput = 'Enter a valid name';
  //     isValid = false;
  //   }else {
  //     isValid = true;
  //   }
    
  //   if (!lastName) {
  //     lastNameErr.fieldEmpty = "Last Name Required"
  //     isValid = false;
  //   }else if (!regex.test(lastName.trim())) {
  //     lastNameErr.invalidInput = 'Enter a valid name';
  //     isValid = false;
  //   }else {
  //     isValid = true;
  //   }

  //   if (!phone) {
  //     phoneErr.fieldEmpty = "Phone number required";
  //     isValid = false;
  //   } else if (!regex_number.test(phone.trim())) {
  //     phoneErr.invalidInput = "Invalid phone number";
  //     isValid = false;
  //   }else {
  //     isValid = true;
  //   }

  //   setFirstNameErr(firstNameErr);
  //   setLastNameErr(lastNameErr);
  //   setPhoneErr(phoneErr);

  //   return isValid;

  // };

  return (
    <div className="card loginCard">
      <div className="cardContent">
        <div className="title">
          <h1>Personal Details</h1>
        </div>

        <form>
        <span>
            <label
            for="firstName"
            className={`text-small-uppercase ${errors.firstName && "is-danger"}`}
            style={firstName ? { transform: "translate(0,0)" } : null}
            >
              First Name
            </label>
            <input
            class={`text-body ${errors.firstName && "is-danger"}`}
            type="text" name="firstName" id="firstName" onChange={handleChange} value={values.firstName || ''} required
            onClick={() => setFirstName(!firstName)}/>
            {errors.firstName && (
              <p className="help is-danger">{errors.firstName}</p>
            )}
        </span>
        <span>
        <label
        for="lastName"
        className={`text-small-uppercase ${errors.lastName && "is-danger"}`}
        style={lastName ? { transform: "translate(0,0)" } : null}
        >
          Last Name
        </label>
        <input
        class={`text-body ${errors.lastName && "is-danger"}`}
        type="text" name="lastName" id="lastName" onChange={handleChange} value={values.lastName || ''} required
        onClick={() => setLastName(!lastName)}/>
        {errors.lastName && (
          <p className="help is-danger">{errors.lastName}</p>
        )}
        </span>
        <span>
        <label
            for="phone"
            className={`text-small-uppercase ${errors.phoneNumber && "is-danger"}`}
            style={phoneNumber ? { transform: "translate(0,0)" } : null}
            >
              Phone Number
            </label>
            <input
            class={`text-body ${errors.phoneNumber && "is-danger"}`}
            type="text" name="phoneNumber" id="phoneNumber" onChange={handleChange} value={values.phoneNumber || ''} required
            onClick={() => setPhoneNumber(!phoneNumber)}/>
            {errors.phoneNumber && (
              <p className="help is-danger">{errors.phoneNumber}</p>
            )}
        </span>
        <div>
          {/* <Link to='/createaccount'> */}
          <span class="buttons">
          <button type="button" class="btn btn-sm text-small-uppercase-button login_btn back_btn" id="submit" onClick={previousStep}>Back</button>
          </span>
          {/* </Link> */}
          <Link to='/educationaldetails'>
          <span>
          <button onClick={handleSubmit} noValidate type="submit" class="btn btn-sm text-small-uppercase-button login_btn back_btn" id="submit" >Next</button>
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
