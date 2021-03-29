import React, {useState} from 'react'
import './RequestDemo.css'


const RequestDemo1 = ({
  nextStep
}) => {
   const [firstName, setFirstName] = useState();
   const [lastName, setLastName] = useState();
   const [contactNo, setContactNo] = useState();
   const [email, setEmail] = useState();
   const [firstNameErr, setFirstNameErr] = useState({});
   const [lastNameErr, setLastNameErr] = useState({});
   const [contactNoErr, setContactNoErr] = useState({});
   const [emailErr, setEmailErr] = useState({});

  const handleSubmit = () => {
    const isValid = formValidation();
    if(isValid) {
      nextStep();
    }
  }

  const formValidation = () => {
    const firstNameErr = {};
    let isValid = true;
    const lastNameErr = {};
    const emailErr = {};
    const contactNoErr = {};
    const regex_name = /^[a-zA-Z\\s]*$/;
    const regex_email = /\S+@\S+\.\S+/;
    const regex_number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;


    if(!firstName) {
      firstNameErr.fieldEmpty = 'First name is required';
      isValid = false;
    }else if(!regex_name.test(firstName.trim())) {
      firstNameErr.invalidInput = 'Please enter a valid name';
      isValid = false;
    }else {
      isValid = true;
    }

    if(!lastName) {
      lastNameErr.fieldEmpty = 'Last name is required';
      isValid = false;
    }else if(!regex_name.test(lastName.trim())) {
      lastNameErr.invalidInput = 'Please enter a valid name';
      isValid = false;
    }else {
      isValid = true;
    }

    if(!email) {
      emailErr.fieldEmpty = 'Email name is required';
      isValid = false;
    }else if(!regex_email.test(email.trim())) {
      emailErr.invalidInput = 'Please enter a valid email';
      isValid = false;
    }else {
      isValid = true;
    }

    if (!contactNo) {
      contactNoErr.fieldEmpty = "Phone number required";
      isValid = false;
    } else if (!regex_number.test(contactNo.trim())) {
      contactNoErr.invalidInput = "Invalid phone number";
      isValid = false;
    }else {
      isValid = true;
    }

    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    setContactNoErr(contactNoErr);
    setEmailErr(emailErr);

    return isValid;
  }

   return (
      <div>   
               <div class="card RequestCard">
                  <div class="cardContent-Request">
                  <div class="title request-title">
                     <h1>Request Demo</h1>
                  </div>
                     <form>
                        <span>
                           <label for="firstName" class="text-small-uppercase-request requestLabel"
                              style={firstName ? {transform: "translate(0,0)"} : null}>First Name</label>
                           <input class="text-body requestDemoInput" id="firstName" name="firstName" type="text" required
                                 onChange={(e) => setFirstName(e.target.value)}/>
                            {Object.keys(firstNameErr).map((key) => {
                              return <p style={{ color: 'red', fontSize:'14px'}}>
                                {firstNameErr[key]}
                              </p>
                            })}
                        </span>
                        <span>
                           <label for="lastName" class="text-small-uppercase-request requestLabel"
                              style={lastName ? {transform: "translate(0,0)"} : null}>Last name</label>
                           <input class="text-body requestDemoInput" id="lastName" name="lastName" type="text" required
                              onChange={(e) => setLastName(e.target.value)}/>
                            {Object.keys(lastNameErr).map((key) => {
                              return <p style={{color: 'red', fontSize:'14px' }}>
                                {lastNameErr[key]}
                              </p>
                            })}
                        </span>
                        <span>
                           <label for="contactNo" class="text-small-uppercase-request requestLabel"
                              style={contactNo ? {transform: "translate(0,0)"} : null}>Contact Number</label>
                           <input class="text-body requestDemoInput" id="contactNo" name="contactNo" type="text" required
                              onChange={(e) => setContactNo(e.target.value)}/>
                            {Object.keys(contactNoErr).map((key) => {
                              return <p style={{color: 'red', fontSize:'14px'}}>
                                {contactNoErr[key]}
                              </p>
                            })}
                        </span>
                        <span>
                           <label for="email" class="text-small-uppercase-request requestLabel"
                              style={email ? {transform: "translate(0,0)"} : null}>Email</label>
                           <input class="text-body requestDemoInput" id="email" name="email" type="email" required
                              onChange={(e) => setEmail(e.target.value)}/>
                            {Object.keys(emailErr).map((key) => {
                              return <p style={{color: 'red', fontSize:'14px'}}>
                                {emailErr[key]}
                              </p>
                            })}
                        </span>
                        <span>
                           <button type="button" class="btn btn-sm text-small-uppercase-button-request request_btn" id="submit" onClick={handleSubmit}>Submit</button>
                        </span>
                     </form>
                  </div>
               </div>
            </div>
   )
}

export default RequestDemo1