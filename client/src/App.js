import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomizedInputs from  "./Components/Pages/Personal"
import Header from "./Components/Fragments/Header"
import Footer from './Components/Fragments/Footer';
import Templates from './Components/Pages/Templates';
import Home from "./Components/Pages/Home";
import {BrowserRouter as Router , Route} from "react-router-dom"
import Personal from "./Components/Pages/Personal"
import Profile from "./Components/Pages/Profile"
import Multi from "./Components/Pages/Multi"
import Qualities from './Components/Pages/Qualities'
import Emailsent from "./Components/Pages/Emailsent"
import Phonesent from "./Components/Pages/Phonesent"
import Download from "./Components/Pages/Download"
import About from "./Components/Pages/Section/About"
import Whyus from "./Components/Pages/Section/Whyus"
import Faq from "./Components/Pages/Section/Faq"
import Contacts from "./Components/Pages/Section/Contacts"
import Error from "./Components/Pages/Error"

function App() {
 

  return (
    <div>
        
        
    <Router>

       <Route component={Profile} path="/profile"/>
        <Route exact path="/" component={Home}  />
        <Route exact component={Templates} path="/templates"/>
        <Route exact  component={Personal} path="/personal_information"/>
        <Route exact component={Multi} path="/resumake"/>
        <Route exact component={Qualities} path="/qualities"/>
        <Route exact component={Emailsent} path="/email_sent"/>
        <Route exact component={Phonesent} path="/phone_sent"/>
        <Route exact component={Download} path="/download"/>
        <Route exact component={About} path="/About"/>
        <Route exact component={Whyus} path="/Whyus"/>
        <Route exact component={Faq} path="/Faq"/>
        <Route exact component={Contacts} path="/Contacts"/>
        <Route exact component={Error} path="/Error"/>

        </Router>
    
    </div>
  );
}

export default App;
