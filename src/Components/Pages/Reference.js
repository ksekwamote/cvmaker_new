
import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import {prevStep, nextStep, addReference, remReference ,changeReferentName,changeOccupation,changeCompany,changeRPhoneNumber} from "../action/index"
import Referent from "../Fragments/Referent"

export default function Reference() {

 const dispatch = useDispatch();
 const schools = useSelector(state => state.reference.values.refree)
    return (
        <React.Fragment>
                <div>

      <div>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h1>REFERENCE</h1>
    
        </div>
        
      <div>
      { 

      schools.map( (item, index) => (

          <Referent index ={index} />

      )) 

      }
      </div>
       


<div style={{textAlign:"center"}}>
<a href="#" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(addReference())}>+</a>{'      '}
      <a href="#" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remReference())}>-</a>
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