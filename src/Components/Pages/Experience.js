
import React, { PropTypes } from 'react'
import Grid from '@material-ui/core/Grid';
import MaterialUIPickers from "../GUI/Datepicker"
import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import RichTextEditor from 'react-rte';
import {nextStep , prevStep} from "../action/index"
import Richtext from "../GUI/Richtext"

 

 

export default function Experience(){

 
    const dispatch = useDispatch();
   

    return (
        <React.Fragment>
                <div>


<div>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h1>WORK EXPERIENCE</h1>
        </div>
        
    <Grid container justify="space-around">
    <form noValidate>
      
      
      <Textfield
        label="Employer"
        name="employer"
        type="text"
        variant="filled"
        id="employer"
        

      />

    
        <Textfield
        label="Job Title"

        type="text"
        defaultValue="Software Developer"
        variant="filled"
       id="jobTitle"
      />
    <br></br>

      <Textfield
        label="Start Date"
        name="jstartDate"
        defaultValue="Jan 2020"
        type="text"
        variant="filled"
       id="jstartDate"
      />
   

      <Textfield
        label="End Date"
        name= "jendDate"
        defaultValue="Present"
        type="email"
        variant="filled"
        id="jendDate"
      />
         <br></br>
         <Richtext/>
  
      <br></br>
      

     

    
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

