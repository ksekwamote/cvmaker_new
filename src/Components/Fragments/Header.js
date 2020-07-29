import React from 'react'
import "../assets/CSS/Header.css"

export default function Header() {
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
                        
                        <a style={{marginLeft:100 , marginTop:20}} href="#" class="logo">Resume Factory</a>
                   
                        <ul style={{marginRight:75}} class="nav">
                            <li class="scroll-to-section"><a href="#welcome" class="active"><strong>Home</strong></a></li>
                            <li class="scroll-to-section"><a href="#about"><strong>About</strong></a></li>
                            <li class="scroll-to-section"><a href="#whyus"><strong>Services</strong></a></li>
                            <li class="scroll-to-section"><a href="#frequently-question"><strong>Frequently Questions</strong></a></li>
                            <li class="submenu">
                                <a href="javascript:;"><strong>Drop Down</strong></a>
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Features</a></li>
                                    <li><a href="">FAQ's</a></li>
                                    <li><a href="">Blog</a></li>
                                </ul>
                            </li>
                            <li class="scroll-to-section"><a href="#contact-us"><strong>Contact Us</strong></a></li>
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    
                    </nav>
                </div>
            </div>
        </div>
    </header>
 

            
        </div>
    )
}
