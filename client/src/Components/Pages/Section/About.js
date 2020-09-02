import React from 'react'
import Header from '../../Fragments/Header'
import Footer from '../../Fragments/Footer'


export default function About() {
    return (
        <div>
                
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
                        <p>Most job applications involve creating and submitting a Resume- but knowing what to include in a CV , what to leave behind or how to format it can be quite a tedious task.  <br></br><br></br>
                      Our task team headed by Mr Kutlo Sekwamote has spent a number of years drafting and creating CVs for potential employees and have amassed considerable feedback to create a platform to help and assist job seekers in their journey up the corporate leader.<br></br>

                      	We are a team of talented developers, graphic designers , career experts and writers. Possesing a superabundace of qualification to deliver a stunningly superb resume that will have employers thiking twice about your Profile before passing on to others.
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
