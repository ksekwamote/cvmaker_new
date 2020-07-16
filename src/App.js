import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomizedInputs from  "./Components/Pages/Personal"
import Header from "./Components/Fragments/Header"
import Footer from './Components/Fragments/Footer';
import Templates from './Components/Pages/Templates';
import Home from "./Components/Pages/Home";
import {Route , Switch } from "react-router-dom"
import Personal from "./Components/Pages/Personal"
import Multiline from "./Components/Pages/Multiline"

function App() {
  return (
    <div>
          
        
        <Route component={Home} path="/home" />
        <Route component={Templates} path="/templates"/>
        <Route component={Personal} path="/personal_information"/>
        <Route component={Multiline} path="/cvmaker"/>

    </div>
  );
}

export default App;
