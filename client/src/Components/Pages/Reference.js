import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import {prevStep, nextStep, addReference, remReference ,changeReferentName,changeOccupation,changeCompany,changeRPhoneNumber} from "../action/index"
import Referent from "../Fragments/Referent"
import FadeIn from 'react-fade-in';
import axios from "axios"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";
import ReactPayPal from "../Fragments/ReactPayPal"
import Email from "../Fragments/Email"
import { simpleValidation } from "./Experience"


const onSubmit = (reduxState , dispatch) =>
 {

 axios.post("/api/create-resume",reduxState)

 dispatch(nextStep())
} 

export default function Reference() {


 const dispatch = useDispatch();
 const references = useSelector(state => state.reference.values.refree)
 const reduxState = useSelector(state => state)
 

 const [checkout, setCheckout] = React.useState(false);

 const [validate, setValidate] = React.useState(false);

 

 const next = () => {

   setValidate(true)


   for(var i=0; i< references.length ; i++){

      if (simpleValidation(references[i].referent)=="valid" && simpleValidation(references[i].occupation)=="valid" && simpleValidation(references[i].company)=="valid" && simpleValidation(references[i].email)=="valid" && simpleValidation(references[i].phone)=="valid"){

             continue
      }

      else{
           return false


           
      }

   }

  return true 
 }


 const addButton = (e) => {

  dispatch(addReference())
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
        <h4>REFERENCE</h4>

        <div style={{textAlign:"center",paddingRight:50 , paddingLeft:50, wordBreak: "break-word"}}>
        <p>A reference is someone who your future employer will contact to verify your credentials.</p>
        <p>A positive recommendation by your references has great potential to help you get you hired </p>
        </div>
        </div>
        
      <div id = "scroll">

      { 

      references.map( (item, index) => (
        <FadeIn>
          <Referent index ={index} validate={validate} />
          </FadeIn>
      )) 

      }
         <div style={{textAlign:"center"}} className="block">
           <Email/>
          </div>
    <br></br>
      </div>
       
      <div id="bottom"></div>

<div style={{textAlign:"center"}}>
<a id="needHelp" class="main-button-slider" style={{color:'#fff'}} onClick={e => addButton()}>+</a>{'      '}
      <a id="needHelp" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remReference())}>-</a>
      </div>
      
        
       
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a id="needHelp" style={{color:'#fff'}} onClick={e => dispatch(prevStep())} className="main-button"><strong>&nbsp; &nbsp; Back &nbsp; &nbsp;</strong></a> {'     '} <div>&nbsp;</div>
              <a id="needHelp" style={{color:'#fff'}} onClick={e => next() ? onSubmit(reduxState , dispatch): console.log("") } className="main-button"><strong>&nbsp; &nbsp; MAKE CV &nbsp; &nbsp;</strong></a>
        </div>

    </div>

      </div>

        </React.Fragment>
        </FadeIn>
    )
}