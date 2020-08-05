import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomizedInputs from  "./Components/Pages/Personal"
import Header from "./Components/Fragments/Header"
import Footer from './Components/Fragments/Footer';
import Templates from './Components/Pages/Templates';
import Home from "./Components/Pages/Home";
import {Route , Switch, BrowserRouter } from "react-router-dom"
import Personal from "./Components/Pages/Personal"
import Multiline from "./Components/Pages/Multiline"
import Profile from "./Components/Pages/Profile"
import Multi from "./Components/Pages/Multi"
import Qualities from './Components/Pages/Qualities'


function App() {
 

  return (
    <div>
         
         <BrowserRouter basename={window.location.pathname || ''}>
       <Route component={Profile} path="/profile"/>
          <Route component={Home} path="/" />
        <Route component={Templates} path="/templates"/>
        <Route component={Personal} path="/personal_information"/>
        <Route component={Multiline} path="/cvmaker"/>
        <Route component={Multi} path="/multi"/>
        <Route component={Qualities} path="/qualities"/>
        </BrowserRouter>
    </div>
  );
}

export default App;
