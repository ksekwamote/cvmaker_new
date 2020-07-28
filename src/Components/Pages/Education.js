
import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import {prevStep, nextStep, addEducation, remEducation} from "../action/index"
import School from "../Fragments/School"

export default function Education() {

 const dispatch = useDispatch();
 const schools = useSelector(state => state.education.values.education)
    return (
        <React.Fragment>
                <div>

      <div>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h1>EDUCATION</h1>
    
        </div>
        
      <div>
      { 

      schools.map( (item, index) => (
          <School index ={index} />
      )) 

      }
      </div>
       


<div style={{textAlign:"center"}}>
<a href="#" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(addEducation())}>+</a>{'      '}
      <a href="#" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remEducation())}>-</a>
      </div>
      
        
       
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a href="#" onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a href="#" onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
        </div>

    </div>

      </div>

        </React.Fragment>
    )
}
