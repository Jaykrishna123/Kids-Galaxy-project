import React from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'

const EducationalDetails = () => {
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
            <div class="card loginCard edu_card">
            <div class="cardContent">
              <div class="title edu_title">
                        <h1 style={{ fontSize: "49px"}}>Educational Details</h1>
              </div>
            <form>
              <div>
              <span>
                <label for="board" class="text-small-uppercase edu_text">Select your Board</label>
              </span>
            </div>
              <div class="inputs edu_inputs">
              <div class="EducationalDetailsBoard row">
                <div class="CBSE EducationalDetailsBoard_board edu_board col-3">
                  <p>CBSE</p>
                </div>
                <div class="ICSE EducationalDetailsBoard_board edu_board col-3">
                  <p>ICSE</p>
                </div>
                <div class="State EducationalDetailsBoard_board edu_board col-3">
                  <p>State</p>
                </div>
              </div>
            </div>
            <span>
                <label for="class" class="text-small-uppercase edu_text">Select your Class</label>
                <input class="text-body" id="class" name="class" type="text" required />
            </span>
            <span>
              <div class="checkbox edu_checkbox">
                  <div class="rememberBox">
                    <input type="checkbox" />
                      <p class="blue">I would like to receive Kids Galaxy's newsletter.</p>
                  </div>
              </div>
            </span>
            <Link to='/personaldetails'>
            <span class="buttons">
            <button type="button" class="btn btn-sm text-small-uppercase-button login_btn back_btn edu_text" id="submit">Back</button>
            </span>
            </Link>
            <Link to=''>
            <span>
            <button type="button" class="btn btn-sm text-small-uppercase-button login_btn back_btn edu_text" id="submit">Submit</button>
            </span>
            </Link>
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
                    <Link to='/login'>
                      <a href="{}">
                      <span class="blue"> Log in</span>
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

export default EducationalDetails
