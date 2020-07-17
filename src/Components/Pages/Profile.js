
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import {changeProfile} from "../action/index"
import {nextStep , prevStep} from "../action/index"


export default function Profile (){
  
    const dispatch = useDispatch();
    return (

      <React.Fragment>
      <div>


        <div>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h1>PROFILE</h1>
        <br></br><br></br>
        </div>
        
    <Grid container justify="space-around">
    <form noValidate>     

        <Multiline
          id="outlined-multiline-static"
          label="Profile"
          multiline
          rows={10}     
          defaultValue=""
          onChange ={e => dispatch(changeProfile(e.target.value))}
          variant="outlined"
        />  

    </form>
    </Grid>
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



