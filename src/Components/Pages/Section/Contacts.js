import React from 'react'
import Header from '../../Fragments/Header'
import Footer from '../../Fragments/Footer'


export default function Contacts() {
    return (
        <div>
                
        	        <Header/>

                    <section align="center" class="section" id="contact-us">
        <div align="center" class="container-fluid">
            <div align="center" >
                <div align="center" class="col-lg-6 col-md-6 col-sm-12">
                    <div class="contact-form">
                        <form id="contact" action="" method="post">
                          <div class="row">
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" onChange={e => this.setState({name:e.target.value})} id="name" placeholder="Full Name" required class="contact-field"></input>
                              </fieldset>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="email" type="text"  onChange={e => this.setState({email:e.target.value})} id="email" placeholder="E-mail" required class="contact-field"></input>
                              </fieldset>
                            </div>
                            <div class="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6"  onChange={e => this.setState({message:e.target.value})} id="message" placeholder="Your Message" required class="contact-field"></textarea>
                              </fieldset>
                            </div>
                            <div class="col-lg-12">
                              <fieldset>
                                <button href="mailto:ksekwamote@mail.com?subject= Send your email here" type="submit" id="form-submit" class="main-button">Send It</button>
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
