
import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import {prevStep, nextStep, addEducation, remEducation} from "../action/index"
import School from "../Fragments/School"
import FadeIn from 'react-fade-in';

export default function Education() {

 const dispatch = useDispatch();
 const schools = useSelector(state => state.education.values.education)
 const personal = useSelector(state => state.personer);


    return (

      <FadeIn>
        <React.Fragment>
                <div>

      <div>

      <br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h4>EDUCATION</h4>

        <div style={{textAlign:"center",paddingRight:50 , paddingLeft:50, wordBreak: "break-word"}}>
        <p>Education is an important piece of information employers will look for on your resume.</p>
        </div>

        </div>
        
      <div>
      { 

      schools.map( (item, index) => (
        <FadeIn>
          <School index ={index} />
          </FadeIn>
      )) 

      }
      </div>
       
      <div id="bottom"></div>

<div style={{textAlign:"center"}}>
<a  id="needHelp" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(addEducation())}>+</a>{'      '}
      <a id="needHelp"  class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remEducation())}>-</a>
      </div>
      
        
       
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a id="needHelp" style={{color:'#fff'}} onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a id="needHelp" style={{color:'#fff'}} onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
        </div>

    </div>

      </div>

        </React.Fragment>
        </FadeIn>
    )
}
