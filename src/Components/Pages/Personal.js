
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import MaterialUIPickers from "../GUI/Datepicker"
import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import {changeFirstname,changeHobbies, changeSurname , changeAddress , changeEmail ,changePhoneNumber, nextStep} from "../action/index"
import TextField from '@material-ui/core/TextField';
import FadeIn from 'react-fade-in';


export default function(props) {

    

   const stylesi ={
     info:{
       textAlign: "center",
        padding:"30px",

     }
   }
    const dispatch = useDispatch();


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
    <form noValidate>
      
      
      <Textfield
        label="Name"
        name="firstname"
        type="text"
        variant="filled"
        onChange = {e => dispatch(changeFirstname(e.target.value))}
        id="firstname"
        

      />

    
        <Textfield
        label="Surname"

        type="text"
        defaultValue=""
        variant="filled"
        onChange={e => dispatch(changeSurname(e.target.value))}
        id="reddit-input"
      />
    <br></br>

      <Textfield2
        label="Address"
 
        defaultValue=""
        type="text"
        variant="filled"
       onChange={e => dispatch(changeAddress(e.target.value))}
        id="reddit-input"
      />
      <br></br>

      <Textfield
        label="Email"
        
        defaultValue=""
        type="email"
        variant="filled"
        onChange={e => dispatch(changeEmail(e.target.value))}
        id="reddit-input"
      />
        <Textfield
        label="Phone Number"

        defaultValue="+267 77105790"
        variant="filled"
        type="text"
      onChange={e => dispatch(changePhoneNumber(e.target.value))}
        id="reddit-input"
      />
      <br></br>
      <Textfield
        label="Hobbies and Interests"

        defaultValue=""
        type="text"
        variant="filled"
        id="reddit-input"
        onChange={e => dispatch(changeHobbies(e.target.value))}
      /> 
  
        {'       '} <MaterialUIPickers/>

     

       

        

    </form>
    </Grid>
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a href="#Profile" onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
              
        </div>

    </div>

      </div>
      </React.Fragment>
      </FadeIn>
    )
  }


