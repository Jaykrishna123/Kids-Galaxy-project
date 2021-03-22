import React from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'

const CreateAccount = () => {

   return (
      <div>
         <div class="row container-fluid mainContent">
        <div class= "mainLeft col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div class="mainLeftContent d-md-none d-lg-block">
                <img src="Images/Sign Up Illustration.svg" alt="" />
                <p>
                  To get exciting discounts, offers, free study resources, <br /> special
                  programs from Kids Galaxy
                  <Link to='/createaccount'>
                  <span class="blue"> Sign Up here.</span>
                  </Link>
                </p>
          </div>
        </div>
        <div class="middleLine d-md-none d-lg-block"></div>
        <div class= "mainRight col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div class="card loginCard">
            <div class="cardContent">
              <div class="title">
                <h1>Create Account</h1>
              </div>

              <form>
                <span>
                  <label for="email" class="text-small-uppercase">Email</label>
                  <input class="text-body" id="email" name="email" type="email" required />
                </span>
                <span>
                  <label for="password" class="text-small-uppercase">Password</label>
                  <input class="text-body" id="password" name="password" type="password" required />
                </span>
                <span>
                  <label for="password" class="text-small-uppercase">Confirm Password</label>
                  <input class="text-body" id="password" name="password" type="password" required />
                </span>
                <Link to='/personaldetails'>
                    <span>
                    <input class="text-small-uppercase-button" id="submit" type="submit" value="Submit"/>
                    </span>
                </Link>
               
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
                    <Link to='/createaccount'>
                    <a href="{}" >
                      <span class="blue"> Sign Up</span>
                    </a>
                    </Link>
                    
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

export default CreateAccount
