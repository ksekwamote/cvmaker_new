import React, { useEffect } from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Qualities from './Qualities'
import Education from './Education';
import Reference from './Reference';

import Profile from './Profile'
import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"
import {useSelector} from "react-redux"
import { CSSTransition } from "react-transition-group"
import FadeIn from 'react-fade-in';
import Download from "./Download";
import {Helmet} from 'react-helmet'
import {initGA,  GApageView} from "./../../index"






 function SwitchSteps(){
     const steps = useSelector(state => state.steper)
    
     //console.log(steps)
    
        switch(steps){
            case 1:
                return <Personal/>
            case 2:
                return <Profile/>   
             case 3:
                return <Experience/>
            case 4:
                return <Qualities/>
            case 5:
                return <Education/>
            case 6: 
                return <Reference/>
            default:
                return <Download/>

        }



}

export default function Multi(){
    useEffect(()=> {GApageView("/resumake")})
    return (
        <div>

            <Helmet>
                    <title>You'll look better with us  </title>
                    <meta name="description" content="Our user friendly platform gives you the ability to build or create a professional cv in a matter of 5 minutes. " />
                </Helmet>

            <Header/>

            <SwitchSteps/>

            <Footer/>


        </div>
        

    )
}