import React, { Component } from 'react'
import "../assets/CSS/Header.css"
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

export default class Footer extends Component {
    render() {
        return (
            <div>
            
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <p className="copyright">Copyright &copy; 2020  
    . Design: <a rel="nofollow" href="#">kutlo</a></p>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <ul className="social">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-rss"></i></a></li>
           
                    </ul>
                </div>
            </div>
        </div>
    </footer>

            </div>
        )
    }
}

