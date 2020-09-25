import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomizedInputs from  "./Components/Pages/Personal"
import Header from "./Components/Fragments/Header"
import Footer from './Components/Fragments/Footer';
import Templates from './Components/Pages/Templates';
import Home from "./Components/Pages/Home";
import { Route ,Switch} from "react-router-dom"
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
import {initGA,  GApageView} from "./index"





const Application = () => (

  <div>
        
        
  <Switch >

     <Route component={Profile} path="/profile"/>
      <Route exact path="/" component={Home}  />
      <Route  component={Templates} path="/templates"/>
      <Route  component={Personal} path="/personal_information"/>
      <Route component={Multi} path="/resumake"/>
      <Route component={Qualities} path="/qualities"/>
      <Route  component={Emailsent} path="/email_sent"/>
      <Route  component={Phonesent} path="/phone_sent"/>
      <Route  component={Download} path="/download"/>
      <Route  component={About} path="/About"/>
      <Route  component={Whyus} path="/Whyus"/>
      <Route  component={Faq} path="/Faq"/>
      <Route  component={Contacts} path="/Contacts"/>
      <Route  component={Error} path="/Error"/>

      </Switch>
  
  </div>

)

function App() {
  useEffect(() => { initGA(); }, []);
 

  return (
    <Switch>
      <Application/>
    </Switch>
    
  );
}

export default App;
