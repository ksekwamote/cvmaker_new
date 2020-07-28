
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



export default function Work (props){
    const formRef = React.createRef();
    const dispatch = useDispatch();
    const i = props.index
    const defaultValues = useSelector(state => state.experiences.values.work[i])
    const jobDescription = defaultValues.jdescription

  
   const save = () => {
    const form = formRef.current;
    dispatch(changeJobDescription(form.state.value.toString('html'),i))
  }
  

    return (

    <Grid container justify="space-around">
    <form noValidate>
      {console.log("index: "+i)}
      <Textfield
        label="Employer"
        name="employer"
        type="text"
        variant="filled"
        id="employer"
        defaultValue={defaultValues.employer}
        onChange ={e => dispatch(changeEmployer(e.target.value, i ))}
        

      />

    
        <Textfield
        label="Job Title"

        type="text"
        defaultValue={defaultValues.position}
        variant="filled"
       id="jobTitle"
       onChange ={e => dispatch(changeJob(e.target.value, i))}
      />
    <br></br>

      <Textfield
        label="Start Date"
        name="jstartDate"
        defaultValue={defaultValues.jstartDate}
        type="text"
        variant="filled"
       id="jstartDate"
       onChange ={e => dispatch(changeJobStartDate(e.target.value, i))}
      />
   

      <Textfield
        label="End Date"
        name= "jendDate"
        defaultValue={defaultValues.jendDate}
        type="email"
        variant="filled"
        id="jendDate"

        onChange ={e => dispatch(changeJobEndDate(e.target.value, i))}
      />
         <br></br>

         <Richtext
            ref ={formRef}
            onBlur ={e => save()}
           
         />
  
      <br></br>
      

     

    
    </form>
    </Grid>


    )





}