
import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import {prevStep, nextStep, addReference, remReference ,changeReferentName,changeOccupation,changeCompany,changeRPhoneNumber} from "../action/index"
import Referent from "../Fragments/Referent"
import FadeIn from 'react-fade-in';

export default function Reference() {

 const dispatch = useDispatch();
 const schools = useSelector(state => state.reference.values.refree)
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
<a href="#bottom" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(addReference())}>+</a>{'      '}
      <a href="#bottom" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remReference())}>-</a>
      </div>
      
        
       
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a  style={{color:'#fff'}} onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a style={{color:'#fff'}} onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
        </div>

    </div>

      </div>

        </React.Fragment>
        </FadeIn>
    )
}