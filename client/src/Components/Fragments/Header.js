import React, { Component } from 'react'
import "../assets/CSS/Header.css"
import { HashRouter, Route, Link } from "react-router-dom";
import $ from 'jquery'

export default class Header extends Component {
    
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount () {
        $(".submenu").on("click", function() {
            var width = $(window).width();
            if (width < 992) {
              $(".submenu ul").toggleClass("active");
            }
           
          })

          if ($(".menu-trigger").length) {
            $(".menu-trigger").on("click", function() {
              $(this).toggleClass("active");
              $(".header-areas .nav").slideToggle(200);
            });
          }

    }


   
   render(){
    return (
        <div>

    <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  
 
    <header class="header-areas header-stickys">
        <div class="containers">
            <div class="row">
                <div class="col-12" style={{backgroundColor:'#fff'}}>
                    <nav class="main-nav" >
                        
                        <a  href="/" id="log" class="logo">Resume Factory</a>
                       
                        <ul style={{marginRight:75}} class="nav">
                        <li class="scroll-to-section"><Link to="/"><strong>Home</strong></Link></li>
                            <li class="scroll-to-section"><Link to="/resumake"><strong>ResumeMaker</strong></Link></li>
                            <li class="scroll-to-section"><Link to="/About"><strong>About</strong></Link></li>
                            <li class="scroll-to-section"><Link to="/Whyus"><strong>Whyus</strong></Link></li>
                            <li class="scroll-to-section"><Link to="/Contacts"><strong>Contacts</strong></Link></li>
                        </ul>
                        <a class='menu-trigger'>
                            <span id="span">Menu</span>
                        </a>
                    
                    </nav>
                </div>
            </div>
        </div>
    </header>
 

            
        </div>
    )
   }
}
