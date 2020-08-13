import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomizedInputs from  "./Components/Pages/Personal"
import Header from "./Components/Fragments/Header"
import Footer from './Components/Fragments/Footer';
import Templates from './Components/Pages/Templates';
import Home from "./Components/Pages/Home";
import {Route , Switch, BrowserRouter , HashRouter } from "react-router-dom"
import Personal from "./Components/Pages/Personal"
import Profile from "./Components/Pages/Profile"
import Multi from "./Components/Pages/Multi"
import Qualities from './Components/Pages/Qualities'
import Emailsent from "./Components/Pages/Emailsent"
import Download from "./Components/Pages/Download"


function App() {
 

  return (
    <div>
        
        
    <HashRouter basename="/">

       <Route component={Profile} path="/profile"/>
        <Route exact path="/" component={Home}  />
        <Route component={Templates} path="/templates"/>
        <Route component={Personal} path="/personal_information"/>
        <Route component={Multi} path="/multi"/>
        <Route component={Qualities} path="/qualities"/>
        <Route component={Emailsent} path="/email_sent"/>
        <Route component={Download} path="/download"/>

        </HashRouter>
    
    </div>
  );
}

export default App;
