
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import {changeProfile} from "../action/index"
import {nextStep , prevStep} from "../action/index"
import { CSSTransition } from "react-transition-group"
import Zoom from "@material-ui/core/Zoom"
import FadeIn from 'react-fade-in';

export default function Profile (){
  
    const dispatch = useDispatch();
    return (
      <FadeIn>
      <React.Fragment>
      <div>


        <div>

      <br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h4>SUMMARY</h4>
        <div style={{textAlign:"center",paddingRight:50 , paddingLeft:50, wordBreak: "break-word"}}>
        <p>A resume summary statement is a one- to two-sentence professional introduction <br></br>that is added to highlight your most valuable skills and experiences.</p>
        </div>
        <br></br>
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
              <a style={{color:'#fff'}} onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a style={{color:'#fff'}} onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>

        </div>

    </div>

      </div>
      </React.Fragment>
      </FadeIn>
 
    )
  }



