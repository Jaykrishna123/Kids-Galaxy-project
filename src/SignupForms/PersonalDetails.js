import React from 'react'
import {Link} from 'react-router-dom'

import './Signup.css'

const PersonalDetails = () => {
   return (
      <div>
         <div class="row container-fluid mainContent">
        <div class= "mainLeft col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div class="mainLeftContent d-md-none d-lg-block">
                <img src="Images/Sign Up Illustration.svg" alt="" />
                <p>
                  To get exciting discounts, offers, free study resources, <br /> special
                  programs from Kids Galaxy
                  <span class="blue"> Sign Up here.</span>
                </p>
          </div>
        </div>
        <div class="middleLine d-md-none d-lg-block"></div>
        <div class= "mainRight col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div class="card loginCard">
      <div class="cardContent">
        <div class="title">
          <h1>Personal Details</h1>
        </div>

        <form>
          <span>
            <label for="fname" class="text-small-uppercase">First Name</label>
            <input class="text-body" id="fname" name="fname" type="text" required/>
          </span>
          <span>
            <label for="lname" class="text-small-uppercase">Last Name</label>
            <input class="text-body" id="lname" name="lname" type="text" required />
          </span>
          <span>
            <label for="mobile" class="text-small-uppercase">Mobile Number</label>
            <input class="text-body" id="mobile" name="mobile" type="text" required />
          </span>
          <div>
          <span>
            <Link to='/createaccount'>
            <input class="text-small-uppercase-button backBtn" id="submit" type="submit" value="Back" />
            </Link>
            <Link to='/educationaldetails'>
            <input class="text-small-uppercase-button" id="submit" type="submit" value="Submit"/>
            </Link>
            
          </span>
        </div>
        </form>
        <div class="orLogin">
          <div class="hero">
            <span class="hr"></span>
            <p>Or signup using</p>
            <span class="hr"></span>
          </div>
          <div class="faceG">
            <img src="Images/Facebook.svg" alt="" />
            <img src="Images/Gmail Icon.svg" alt="" />
            <p>
              Already a member?
              <a href="{}">
                <span class="blue"> Log in</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
      </div>
   )
}

export default PersonalDetails
