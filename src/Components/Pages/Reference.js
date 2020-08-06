
import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import {prevStep, nextStep, addReference, remReference ,changeReferentName,changeOccupation,changeCompany,changeRPhoneNumber} from "../action/index"
import Referent from "../Fragments/Referent"
import FadeIn from 'react-fade-in';
import axios from "axios"


const onSubmit = (reduxState , dispatch) =>
 {

 axios.post("http://localhost:5001/create-resume",reduxState)

 dispatch(nextStep())
} 

export default function Reference() {


 const dispatch = useDispatch();
 const schools = useSelector(state => state.reference.values.refree)
 const reduxState = useSelector(state => state)
 
 return (

      <FadeIn>
        <React.Fragment>
                <div>

      <div>

      <br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h4>REFERENCE</h4>

        <div style={{textAlign:"center",paddingRight:50 , paddingLeft:50, wordBreak: "break-word"}}>
        <p>A reference is someone who your future employer will contact to verify your credentials.</p>
        <p>A positive recommendation by your references has great potential to help you get you hired </p>
        </div>
        </div>
        
      <div>

      { 

      schools.map( (item, index) => (
        <FadeIn>
          <Referent index ={index} />
          </FadeIn>
      )) 

      }

      </div>
       
      <div id="bottom"></div>

<div style={{textAlign:"center"}}>
<a  class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(addReference())}>+</a>{'      '}
      <a class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remReference())}>-</a>
      </div>
      
        
       
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a style={{color:'#fff'}} onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a style={{color:'#fff'}} onClick={e => onSubmit(reduxState , dispatch)} className="main-button">&nbsp; &nbsp; MAKE CV &nbsp; &nbsp;</a>
        </div>

    </div>

      </div>

        </React.Fragment>
        </FadeIn>
    )
}