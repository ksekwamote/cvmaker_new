import React, { Component } from 'react'
import Personal from './Personal';
import Experience from './Experience';
import Qualities from './Qualities'
import Education from './Education';
import Reference from './Reference';
import Interests from './Interests';
import Profile from './Profile'
import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"
import {useSelector} from "react-redux"
import { CSSTransition } from "react-transition-group"
import FadeIn from 'react-fade-in';

 function SwitchSteps(){
     const steps = useSelector(state => state.steper)
    
     console.log(steps)
    
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
                return <Personal/>

        }



}

export default function Multi(){
    return (
        <div>

            <Header/>

            <SwitchSteps/>

            <Footer/>


        </div>
        

    )
}