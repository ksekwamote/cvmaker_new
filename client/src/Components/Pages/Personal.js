
import React, { Component, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import MaterialUIPickers from "../GUI/Datepicker"
import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import {changeFirstname,changeCurrentOccupation, changeSurname , changeAddress , changeEmail ,changePhoneNumber, nextStep} from "../action/index"
import TextField from '@material-ui/core/TextField';
import FadeIn from 'react-fade-in';
import { set } from 'date-fns';




export const textValidation = (value) => {

  const letters = /^[a-zA-Z\s'-]*$/;


    if (value.length == 0){
        return "This field is required"
    }
    else if (letters.test(value) ){
      return "valid"
    }
    else{
      return "Your input is invalid"
    }



}


export const addressValidation = (value) => {

  const letters = /^[a-zA-Z0-9\s,'-]*$/;


    if (value.length == 0){
        return "This field is required"
    }
    else if (letters.test(value) ){
      return "valid"
    }
    else{
      return "Your input is invalid"
    }



}


export const numberValidation = (value) =>{

  const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;


  if (value.length == 0){
      return "This field is required"
  }
  else if (regex.test(value) ){
    return "valid"
  }
  else{
    return "Your input is invalid"
  }
}



export const emailValidation = (value) =>{
  
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


  if (value.length == 0){
      return "This field is required"
  }
  else if (regex.test(value) ){
    return "valid"
  }
  else{
    return "Your input is invalid"
  }


}


export const validator = (response , setState) => {
  if (response == "This field is required" ){
      setState({error:true , help :response})
  }
  else if(response == "Your input is invalid"){
    setState({error:true , help :response})
  }
  else{

    setState({error:false , help :""})
  }

}


export default function(props) {

   const stylesi ={
     info:{
       textAlign: "center",
        padding:"30px",

     }
   }
   const dispatchs = useDispatch();
   const personal = useSelector(state => state.personer);

   const [validName , validateName] = useState({
     error: false,
     help: ""
   })
   const [validSurname , validateSurname] = useState({
    error: false ,
    help: ""
  })
   const [validAddress , validateAddress] = useState({
    error: false ,
    help: ""
  })
   const [validEmail , validateEmail] = useState({
    error: false ,
    help: ""
  })
   const [validPhone , validatePhone] = useState({
    error: false ,
    help: "E.g +27 62 508 0050"
  })

   const [validate , setValidate] = useState({
    error: false ,
    help: ""
  })






    const validateFields = ( val ,setState) =>{



      validator(val, setState)

    }
    




    const next = (firstname ,surname , address , email , phone) =>{



      
      validateFields(textValidation(firstname), validateName)
      validateFields(textValidation(surname), validateSurname)
      validateFields(addressValidation(address), validateAddress)
      validateFields(emailValidation(email), validateEmail)
      validateFields(numberValidation(phone), validatePhone)





    
      if ( textValidation(firstname)=="valid" && textValidation(surname)=="valid" && addressValidation(address)=="valid" && emailValidation(email)=="valid" && numberValidation(phone)=="valid"  ){
        
        dispatchs(nextStep())
        
      }
      else {
    
       
       
      }
    
    }
    


    return (

      <FadeIn>
      <React.Fragment>
      <div>


<div>

      <br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h4 classn>PERSONAL INFORMATION</h4>
        <div style={{textAlign:"center",paddingRight:50 , paddingLeft:50, wordBreak: "break-word"}}>
        <p styles={{width:50 ,wordBreak: "break-word"}} >Tell potential employers a little about yourself. <br></br> Contact details will be used to identify and get in touch with you.   </p>
        </div>
        </div>
      
    <Grid container justify="center">
    <form method="post" >
      
      
      <Textfield
        label="Name"
        name="firstname"
        type="text"
        variant="filled"
        onChange = {e => dispatchs(changeFirstname(e.target.value))}
        onBlur= {e => validateFields( textValidation(e.target.value) ,validateName)} 
        id="firstname"
        defaultValue={ personal.firstname}

        error ={validName.error}
        helperText ={ validName.help}
        required 
        

      />

    
        <Textfield
        error
        label="Surname"

        type="text"

        variant="filled"
        onChange = {e => dispatchs(changeSurname(e.target.value))}
        onBlur={e => validateFields( textValidation(e.target.value) ,validateSurname) }
        id="reddit-input"
        defaultValue={personal.surname}
        error ={ validSurname.error}
        helperText ={ validSurname.help}
    
        required 

      />
    <br></br>

      <Textfield2
        label="Address"
 

        type="text"
        variant="filled"
        onChange = {e => dispatchs(changeAddress(e.target.value))}
        onBlur={e =>  validateFields( addressValidation(e.target.value) ,validateAddress) }
        id="reddit-input"
        defaultValue={personal.address}
        error ={ validAddress.error}
        helperText ={ validAddress.help}
        required 
      />
      <br></br>

      <Textfield
        label="Email"
        

        type="email"
        variant="filled"
        onChange = {e => dispatchs(changeEmail(e.target.value))}
        onBlur={e => validateFields(emailValidation(e.target.value)   ,validateEmail)}
        id="reddit-input"
        defaultValue={personal.email}
        error ={ validEmail.error}
        helperText ={ validEmail.help}
        required 
        
      />
        <Textfield
        label="Phone Number"


        variant="filled"
        type="text"
        onChange = {e => dispatchs(changePhoneNumber(e.target.value))}
      onBlur={e => validateFields(numberValidation(e.target.value)   ,validatePhone) }
      defaultValue={personal.phoneNumber}
        id="reddit-input"
        error ={ validPhone.error}
        helperText ={validPhone.help}
        required 
      />
      <br></br>
      <Textfield
        label="Occupation"

        defaultValue={personal.occupation}
        type="text"
        variant="filled"
        id="reddit-input"
        onChange={e => dispatchs(changeCurrentOccupation(e.target.value))}
      /> 
  
        {'       '} <MaterialUIPickers/>

     

        <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a id="needHelp" type="submit" style={{color:'#fff'}} onClick={e => next(personal.firstname ,personal.surname ,personal.address,personal.email,personal.phoneNumber) }
               className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
    
        </div>

        

    </form>
    </Grid>


    </div>

      </div>
      </React.Fragment>
      </FadeIn>
    )
  }


