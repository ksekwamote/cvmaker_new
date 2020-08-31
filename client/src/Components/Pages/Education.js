
import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import {prevStep, nextStep, addEducation, remEducation} from "../action/index"
import School from "../Fragments/School"
import FadeIn from 'react-fade-in';
import { simpleValidation } from "../Pages/Experience"

export default function Education() {

 const dispatch = useDispatch();
 const schools = useSelector(state => state.education.values.education)
 const personal = useSelector(state => state.personer);

 const [validate, setValidate] = React.useState(false);

 

 const next = () => {

   setValidate(true)


   for(var i=0; i< schools.length ; i++){

      if (simpleValidation(schools[i].fieldOfStudy)=="valid" && simpleValidation(schools[i].schoolName)=="valid" && simpleValidation(schools[i].startDate)=="valid" && simpleValidation(schools[i].gradDate)=="valid"){

             continue
      }

      else{
           return false


           
      }

   }


  return true 
 }

 const addButton = () => {

  dispatch(addEducation())
  setValidate(false)
  var scrollDiv = document.getElementById("scroll")

  window.scrollTo(0, scrollDiv.scrollHeight-30 )
  
}


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
        
      <div id="scroll">
      { 

      schools.map( (item, index) => (
        <FadeIn>
          <School index ={index} validate ={validate} />
          </FadeIn>
      )) 

      }
      </div>
       
      <div id="bottom"></div>

<div style={{textAlign:"center"}}>
<a  id="needHelp" class="main-button-slider" style={{color:'#fff'}} onClick={e => addButton() }>+</a>{'      '}
      <a id="needHelp"  class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remEducation())}>-</a>
      </div>
      
        
       
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a id="needHelp" style={{color:'#fff'}} onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a id="needHelp" style={{color:'#fff'}} onClick={e => next() ? dispatch(nextStep()): console.log("")} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
        </div>

    </div>

      </div>

        </React.Fragment>
        </FadeIn>
    )
}
