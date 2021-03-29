import React, {useState} from 'react'
import './RequestDemo.css'


const RequestDemo1 = ({
  nextStep
}) => {
   const [firstName, setFirstName] = useState();
   const [lastName, setLastName] = useState();
   const [contactNo, setContactNo] = useState();
   const [email, setEmail] = useState();

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
                        </span>
                        <span>
                           <label for="lastName" class="text-small-uppercase-request requestLabel"
                              style={lastName ? {transform: "translate(0,0)"} : null}>Last name</label>
                           <input class="text-body requestDemoInput" id="lastName" name="lastName" type="text" required
                              onChange={(e) => setLastName(e.target.value)}/>
                        </span>
                        <span>
                           <label for="contactNo" class="text-small-uppercase-request requestLabel"
                              style={contactNo ? {transform: "translate(0,0)"} : null}>Contact Number</label>
                           <input class="text-body requestDemoInput" id="contactNo" name="contactNo" type="text" required
                              onChange={(e) => setContactNo(e.target.value)}/>
                        </span>
                        <span>
                           <label for="email" class="text-small-uppercase-request requestLabel"
                              style={email ? {transform: "translate(0,0)"} : null}>Email</label>
                           <input class="text-body requestDemoInput" id="email" name="email" type="email" required
                              onChange={(e) => setEmail(e.target.value)}/>
                        </span>
                        <span>
                           <button type="button" class="btn btn-sm text-small-uppercase-button-request request_btn" id="submit" onClick={nextStep}>Submit</button>
                        </span>
                     </form>
                  </div>
               </div>
            </div>
   )
}

export default RequestDemo1