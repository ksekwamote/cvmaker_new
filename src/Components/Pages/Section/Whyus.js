import React from 'react'
import Header from '../../Fragments/Header'
import Footer from '../../Fragments/Footer'


export default function Whyus() {
    return (
        <div>
                
        	        <Header/>

                    <section class="section" id="whyus" >
        <div class="container">
            <div class="row">
                <div class="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
                    <div class="left-heading">
                        <h5>Why Us?</h5>
                    </div>
                    <p>Why Us? Well... for the simple fact that we are gauranteed that you'll look better with us.</p>
                    <ul>
                        <li>
                            <img src={require("../../assets/images/about-icon-01.png")} alt=""></img>
                            <div class="text">
                                <h6>Flexible and Easy to use</h6>
                                <p>Our user friendly platform gives you the ability to build or create a professional cv in a matter of 5 minutes.</p>
                            </div>
                        </li>
                        <li>
                            <img src={require("../../assets/images/about-icon-02.png")} alt=""></img>
                            <div class="text">
                                <h6>Recommended by HR Experts</h6>
                                <p>Our Resume templates have a stamp of approval from the Human Resource department. We are impressively sure that every information detailed inside is what they are looking for </p>
                            </div>
                        </li>
                        <li>
                            <img src={require("../../assets/images/about-icon-03.png")} alt=""></img>
                            <div class="text">
                                <h6>Job Winning CV</h6>
                                <p>Through our experience, we are 70% sure that with our CV's you will not hesitate to land an interview  </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <img src={require("../../assets/images/right-image.png")} class="rounded img-fluid d-block mx-auto" alt="App"></img>
                </div>
            </div>
        </div>
    </section>
  


                    <Footer/>

        </div>
    )
}
