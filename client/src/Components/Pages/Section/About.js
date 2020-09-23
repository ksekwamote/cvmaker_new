import React from 'react'
import Header from '../../Fragments/Header'
import Footer from '../../Fragments/Footer'
import {Helmet} from 'react-helmet'


export default function About() {
    return (
        <div>
            <Helmet>
                    <title>Professional CV Making platform created by developers and career experts </title>
                    <meta name="description" content="We are a team of talented developers, graphic designers , career experts and writers. Possesing a superabundace of qualification to deliver a stunningly superb resume that will have employers thiking twice about your Profile before passing on to others." />
                </Helmet>
                
        	        <Header/>

                    <section class="section" id="whyus" >
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img id="aboutImage" src={require("../../assets/images/left-image.png")} class="rounded img-fluid d-block mx-auto" alt="App"></img>
                </div>
                <div class="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
                    <div class="left-heading">
                        <h5>About Us</h5>
                    </div>
                    <div class="left-text">
                        <p>Knowing how to make a resume is a crucial skill if you plan on making it career wise  <br></br><br></br>
                     This project was developed by Mr Kutlo Sekwamote who has spent a considerable number of years drafting and creating CVs and Cover Letters for potential employees and has amassed considerable feedback to create a free online resume maker to help and assist job seekers in their journey up the corporate leader.<br></br>

                      	It's worth a mention that this project had some assistance from developers, graphic designers , career experts and writers. Possesing a superabundace of qualification to deliver a stunningly superb resume that will have employers thiking twice about your Profile before passing on to others.
                         </p>
                        <a href="github.com/ksekwamote" class="main-button">Find Out More</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="hr"></div>
                </div>
            </div>
        </div>
    </section>


                    <Footer/>

        </div>
    )
}
