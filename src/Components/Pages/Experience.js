
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
import {changeEmployer , changeJob , changeJobStartDate , changeJobEndDate ,changeJobDescription } from "../action/index"


export default function Experience(){

  const formRef = React.createRef();
  const dispatch = useDispatch();

 const save = () => {
  const form = formRef.current;
  dispatch(changeJobDescription(form.state.value.toString('html')))
 
}

 

   
 

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
        onChange ={e => dispatch(changeEmployer(e.target.value))}
        

      />

    
        <Textfield
        label="Job Title"

        type="text"
        defaultValue="Software Developer"
        variant="filled"
       id="jobTitle"
       onChange ={e => dispatch(changeJob(e.target.value))}
      />
    <br></br>

      <Textfield
        label="Start Date"
        name="jstartDate"
        defaultValue="Jan 2020"
        type="text"
        variant="filled"
       id="jstartDate"
       onChange ={e => dispatch(changeJobStartDate(e.target.value))}
      />
   

      <Textfield
        label="End Date"
        name= "jendDate"
        defaultValue="Present"
        type="email"
        variant="filled"
        id="jendDate"

        onChange ={e => dispatch(changeJobEndDate(e.target.value))}
      />
         <br></br>

         <Richtext
            ref ={formRef}
            onBlur ={e => save()}
           
         />
  
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

