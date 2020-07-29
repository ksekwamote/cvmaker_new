import React, { Component } from 'react'
import "../assets/CSS/templatemo-art-factory.css"
import "../assets/CSS/bootstrap.min.css"
import "../assets/CSS/flex-slider.css"
import "../assets/CSS/font-awesome.css"
import "../assets/CSS/owl-carousel.css"
import Footer from "../Fragments/Footer"
import FadeIn from 'react-fade-in';
import { Fade } from '@material-ui/core'

export default class Home extends Component {

    constructor(props){

        super(props)
        this.state ={


        }
    }

    componentDidMount () {
        const carousel = document.createElement("script");
        carousel.src = "../assets/js/owl-carousel.js";
        carousel.async = true;

        const scrollreveal = document.createElement("script");
        scrollreveal.src = "../assets/js/scrollreveal.min.js";
        scrollreveal.async = true;

        const waypoints = document.createElement("script");
        waypoints.src = "../assets/js/waypoints.min.js";
        waypoints.async = true;

        const jquery = document.createElement("script");
        jquery.src = "../assets/js/jquery.counterup.min.js";
        jquery.async = true;

        const imgfix = document.createElement("script");
        imgfix.src = "../assets/js/imgfix.min.js";
        imgfix.async = true;

        document.body.appendChild(jquery);
        document.body.appendChild(imgfix);
        document.body.appendChild(waypoints);
        document.body.appendChild(scrollreveal);
        document.body.appendChild(carousel);
    }

    render() {
        return (
            <div className="body">


    <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  

    
    
  
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        
                        <a href="#" class="logo">Resume Factory</a>
                       
                        <ul class="nav">
                            <li class="scroll-to-section"><a href="#welcome" class="active">Home</a></li>
                            <li class="scroll-to-section"><a href="#about">About</a></li>
                            <li class="scroll-to-section"><a href="#whyus">Services</a></li>
                            <li class="scroll-to-section"><a href="#frequently-question">Frequently Questions</a></li>
                            <li class="submenu">
                                <a href="javascript:;">Drop Down</a>
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Features</a></li>
                                    <li><a href="">FAQ's</a></li>
                                    <li><a href="">Blog</a></li>
                                </ul>
                            </li>
                            <li class="scroll-to-section"><a href="#contact-us">Contact Us</a></li>
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                   
                    </nav>
                </div>
            </div>
        </div>
    </header>
   
                    

    <div class="welcome-area" id="welcome">

     
        <div class="header-text">
            <div class="container">
                <div class="row">
                    <div class="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <h1>Create a Proffesional CV  <strong>Online FREE</strong></h1>
                        <p>Climb the ladder to corporate success through an award  winning professional Resume or CV maker. All our CV's are  <strong>Recommended by HR Experts</strong></p>
                        <a href="/templates" class="main-button-slider">Create My CV &#8594;</a>
                    </div>
                    
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                        <FadeIn
                        transitionDuration={1500}
                        delay={100}
                        >
                        <img src={require("../assets/images/slider-icon.png")} class="rounded img-fluid d-block mx-auto" alt="First Vector Graphic"></img>
                        </FadeIn>
                    </div>
                  
                </div>
            </div>
        </div>

    </div>




    <section class="section" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                    <img src={require("../assets/images/left-image.png")} class="rounded img-fluid d-block mx-auto" alt="App"></img>
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
                        <a href="#about2" class="main-button">Find Out More</a>
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
                            <img src={require("../assets/images/about-icon-01.png")} alt=""></img>
                            <div class="text">
                                <h6>Flexible and Easy to use</h6>
                                <p>Our user friendly platform gives you the ability to build or create a professional cv in a matter of 5 minutes.</p>
                            </div>
                        </li>
                        <li>
                            <img src={require("../assets/images/about-icon-02.png")} alt=""></img>
                            <div class="text">
                                <h6>Recommended by HR Experts</h6>
                                <p>Our Resume templates have a stamp of approval from the Human Resource department. We are impressively sure that every information detailed inside is what they are looking for </p>
                            </div>
                        </li>
                        <li>
                            <img src={require("../assets/images/about-icon-03.png")} alt=""></img>
                            <div class="text">
                                <h6>Job Winning CV</h6>
                                <p>Through our experience, we are 70% sure that with our CV's you will not hesitate to land an interview  </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                    <img src={require("../assets/images/right-image.png")} class="rounded img-fluid d-block mx-auto" alt="App"></img>
                </div>
            </div>
        </div>
    </section>
  




    <section class="section" id="frequently-question">
        <div class="container">
           
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                </div>

            </div>
            

            <div class="row">
                <div class="left-text col-lg-6 col-md-6 col-sm-12">
                    <h5>CONTACTS</h5>
                    <div class="accordion-text">
                        <p>If you’ve got a different question or need a little help with something, do not hesitate to contact us directly and we’ll be happy to give you a helping hand. </p>
                        <span>Email: <a href="#">ksekwamote@yahoo.com</a><br></br></span>
                        <a href="#contact-us" class="main-button">Contact Us</a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="accordions is-first-expanded">
                        <article class="accordion">
                            <div class="accordion-head">
                                <span>How long should my CV be?</span>
                                <span class="icon">
                                    <i class="icon fa fa-chevron-right"></i>
                                </span>
                            </div>
                            <div class="accordion-body">
                                <div class="content">
                                    <p>Researchers at Keele University in England have discovered that most HR departments prefer a CV that is not longer than two sides of A4. 
                                    <br></br>
                                    <br></br>

                                    Given that HRs have tonnes of Resume to scan through its highly advisable to keep your Resume shorter than two pages or one page back to back </p>
                                </div>
                            </div>
                        </article>
                        <article class="accordion">
                            <div class="accordion-head">
                                <span>Should i include Hobbies in my Resume?</span>
                                <span class="icon">
                                    <i class="icon fa fa-chevron-right"></i>
                                </span>
                            </div>
                            <div class="accordion-body">
                                <div class="content">
                                    <p>The Answer is yes you most definitely should, especially if you're a student, hobbies fall under extacurricular activities. Putting extracurricular activities on your resume gives hiring managers a glimpse into your interests outside of your grades and test scores.
                                    <br></br>
                                    <br></br>

                                    Some of the extracurricular activities that will get you points include:
                                     </p>
                                     <ul>

                                     	<li>Playing Chess</li>
                                     	<li>Playing Sports</li>
                                     	<li>Volunteerism</li>
                                     	<li>Drama Music $ the performing arts</li>
                                     	<li>Painting</li>
                                     	

                                     </ul>
                                </div>
                            </div>
                        </article>
                        <article class="accordion">
                            <div class="accordion-head">
                                <span>What if I Have no experience?</span>
                                <span class="icon">
                                    <i class="icon fa fa-chevron-right"></i>
                                </span>
                            </div>
                            <div class="accordion-body">
                                <div class="content">
                                    <p>If you’ve only just graduated or are looking for your first job, you may feel like you don’t have any work experience to list on your resume. The key to this is showing passion and elaborating on the skills that you have developed throughout education and other non-professional experiences. By writing an enthusiastic personal summary, you can demonstrate that you are driven and focused on building a career within a certain area
                                    <br></br>
                                    <br></br>

                                    You should then provide a list of all of your qualifications, hobbies and past projects that have allowed you to develop transferrable skills that make you equipped for the job. Even if you have no formal work experience, volunteer work and undertaking projects at school/uni allow you to develop skills in areas such as customer service, time management and team work that will benefit you professionally.</p>
                                </div>
                            </div>
                        </article>
                        <article class="accordion">
                            <div class="accordion-head">
                                <span>How should I handle employment gaps?</span>
                                <span class="icon">
                                    <i class="icon fa fa-chevron-right"></i>
                                </span>
                            </div>
                            <div class="accordion-body">
                                <div class="content">
                                    <p>The likelihood of an employment gap damaging your chances of landing a new job really depends on how long ago it was and how long it was for. If the period of time was years ago and you’ve been back in work for some time, it really isn’t anything to worry about and will probably go unnoticed.
                                    <br></br>
                                    <br></br>
                                    On the other hand, if your break in employment has happened more recently, which has spanned over several months or even years, then you may want to think about how you can explain this in a way that won’t hinder your job hunt.</p>
                                </div>
                            </div>
                        </article>
                        <article class="accordion">
                            <div class="accordion-head">
                                <span>More Questions?</span>
                                <span class="icon">
                                    <i class="icon fa fa-chevron-right"></i>
                                </span>
                            </div>
                            <div class="accordion-body">
                                <div class="content">
                                    <p> If you have more questions , visit <a href="https://theundercoverrecruiter.com/resume-faqs-answered/"> The Undercover Recruiter</a> for more asnwered questions on cv creation.
                                    <br></br>       <br></br>

                                    or visit <a href="https://luminate.prospects.ac.uk/what-employers-want-in-a-cv"> Prospects Luminate.</a>
                                   </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
 


   
    <section align="center" class="section" id="contact-us">
        <div align="center" class="container-fluid">
            <div align="center" >
                <div align="center" class="col-lg-6 col-md-6 col-sm-12">
                    <div class="contact-form">
                        <form id="contact" action="" method="post">
                          <div class="row">
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Full Name" required class="contact-field"></input>
                              </fieldset>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="email" type="text" id="email" placeholder="E-mail" required class="contact-field"></input>
                              </fieldset>
                            </div>
                            <div class="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6" id="message" placeholder="Your Message" required class="contact-field"></textarea>
                              </fieldset>
                            </div>
                            <div class="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit" class="main-button">Send It</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
      
            </div>
        </div>
    </section>



             <Footer/>   
            </div>
        )
    }
}
