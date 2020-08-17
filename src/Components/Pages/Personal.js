
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import MaterialUIPickers from "../GUI/Datepicker"
import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import {changeFirstname,changeCurrentOccupation, changeSurname , changeAddress , changeEmail ,changePhoneNumber, nextStep} from "../action/index"
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

    const personal = useSelector(state => state.personer);



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
    <form validate >
      
      
      <Textfield
        label="Name"
        name="firstname"
        type="text"
        variant="filled"
        onChange = {e => dispatch(changeFirstname(e.target.value))}
        id="firstname"
        defaultValue={personal.firstname}
        required 
        

      />

    
        <Textfield
        label="Surname"

        type="text"

        variant="filled"
        onChange={e => dispatch(changeSurname(e.target.value))}
        id="reddit-input"
        defaultValue={personal.surname}
        required 

      />
    <br></br>

      <Textfield2
        label="Address"
 

        type="text"
        variant="filled"
       onChange={e => dispatch(changeAddress(e.target.value))}
        id="reddit-input"
        defaultValue={personal.address}
        required 
      />
      <br></br>

      <Textfield
        label="Email"
        

        type="email"
        variant="filled"
        onChange={e => dispatch(changeEmail(e.target.value))}
        id="reddit-input"
        defaultValue={personal.email}
        required 
        
      />
        <Textfield
        label="Phone Number"


        variant="filled"
        type="text"
      onChange={e => dispatch(changePhoneNumber(e.target.value))}
      defaultValue={personal.phoneNumber}
        id="reddit-input"
        required 
      />
      <br></br>
      <Textfield
        label="Occupation"

        defaultValue={personal.occupation}
        type="text"
        variant="filled"
        id="reddit-input"
        onChange={e => dispatch(changeCurrentOccupation(e.target.value))}
      /> 
  
        {'       '} <MaterialUIPickers/>

     

        <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a id="needHelp" type="submit" style={{color:'#fff'}} onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
    
        </div>

        

    </form>
    </Grid>


    </div>

      </div>
      </React.Fragment>
      </FadeIn>
    )
  }


