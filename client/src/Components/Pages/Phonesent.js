import React, { Component } from 'react'
import "../assets/CSS/templatemo-art-factory.css"
import Footer from "../Fragments/Footer"
import FadeIn from 'react-fade-in';
import { Fade } from '@material-ui/core'
import $ from 'jquery'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { HashRouter, Route, Link } from "react-router-dom";
import Email from "../Fragments/Email"




export default class Phonesent extends Component {
    render() {
        return (
            <div>
                <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  

    
    
  

    
           
    <header  style={{position:"fixed"}}class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                
                        <a href="#" id="homelogo" class="logo">Resume Factory</a>
                     
                 
                        <ul class="nav">
                        <li class="scroll-to-section"><a href= "/"><strong>Home</strong></a></li>
                            <li class="scroll-to-section"><a><Link to="/multi"><strong>ResumeMaker</strong></Link></a></li>
                            <li class="scroll-to-section"><a><Link to="/About"><strong>About</strong></Link></a></li>
                            <li class="scroll-to-section"><a href="/"><Link to="/Whyus"><strong>Whyus</strong></Link></a></li>
                            <li class="scroll-to-section"><a href="/"><Link to="/Contacts"><strong>Contacts</strong></Link></a></li>
                        </ul>
                        <a id="mobile-menu" class='menu-trigger'>
                            <span >Menu</span>
                            </a>
                    
                    </nav>
                </div>
            </div>
        </div>
    </header>

   

                    

    <div style={{position:"fixed"}} class="welcome-area" id="welcome">

     
        <div class="header-text">
            <div class="container">
                <div class="row">
                    <div class="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <h1 id="intro"><strong>THANK YOU  </strong></h1>
                        <p>We'll get back to you very soon.</p>
                        <p> 
                        <Email/>
                             </p>
                        

                        <a class="main-button-slider"><Link style={{color:"#fff"}} to="/templates">HAVE ANOTHER GO AT IT &#8594;</Link></a>
                    </div>
                    
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                        <FadeIn
                        transitionDuration={1500}
                        delay={100}
                        >
                        <div id="emoji" class="rounded img-fluid d-block mx-auto" >&#128233; &#128242;</div>
                        </FadeIn>
                    </div>
                  
                </div>
            </div>
        </div>

    </div>


            </div>
        )
    }
}
