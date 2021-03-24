import React  from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./Pages/LandingPage";
import Login from './Pages/Login';
import CreateAccount from './SignupForms/CreateAccount';
import PersonalDetails from './SignupForms/PersonalDetails'
import EducationalDetails from './SignupForms/EducationalDetails'
import RequestDemo from "./SignupForms/RequestDemo";
import './App.css'

function App() {
  return (
    <Router>
    <div>
    <Header/>
    
    <Switch>
    <Route path='/' exact component={LandingPage}/>
    <Route path='/login' component={Login}/>
    <Route path='/requestdemo' component={RequestDemo}/>
    <Route path='/createaccount' component={CreateAccount}/>
    <Route path='/personaldetails' component={PersonalDetails}/>
    <Route path='/educationaldetails' component={EducationalDetails}/>
    </Switch>
    <Footer/>
    </div>
  </Router>
   
    
  );
}

export default App;
