
import React, { PropTypes , useState } from 'react'
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
import {validator} from "../Pages/Personal"


export default function Work (props){
    const formRef = React.createRef();
    const dispatch = useDispatch();
    const i = props.index
    const defaultValues = useSelector(state => state.experiences.values.work[i])
    const jobDescription = defaultValues.jdescription

    const [validEmployer , validateEmployer] = useState({
      error: false,
      help: ""
    })
    const [validPosition, validatePosition] = useState({
     error: false ,
     help: ""
   })
    const [validJstartDate , validateJstartDate] = useState({
     error: false ,
     help: ""
   })
    const [validJendDate , validateJendDate] = useState({
     error: false ,
     help: ""
   })
    

   const simpleValidation = (value) => {
    if (value == ""){
        return "This field is required"
    }
    else {
      return "valid"
    }
  
  }
  


  
   const save = () => {
    const form = formRef.current;
    dispatch(changeJobDescription(form.state.value.toString('html'),i))
  }
   var title;
   if (i>=1){
   title = <h4>Experience #{i+1}</h4>
   }
   else{
     title=""
   }
  





    return (

    <Grid container justify="space-around">
    <form noValidate>
    <div style={{textAlign:"center"}}>
        {
          title
        }

    </div>
      <Textfield
        label="Employer"
        name="employer"
        type="text"
        variant="filled"
        id="employer"
        defaultValue={defaultValues.employer}
        onChange ={e => dispatch(changeEmployer(e.target.value, i ))}
        onBlur= {e => validator(simpleValidation(e.target.value) ,validateEmployer)} 
        error ={validEmployer.error}
        helperText ={ validEmployer.help}
        

      />

    
        <Textfield
        label="Job Title"

        type="text"
        defaultValue={defaultValues.position}
        variant="filled"
       id="jobTitle"
       onChange ={e => dispatch(changeJob(e.target.value, i))}
       onBlur= {e => validator(simpleValidation(e.target.value) ,validatePosition)} 
       error ={validPosition.error}
       helperText ={ validPosition.help}
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
       onBlur= {e => validator(simpleValidation(e.target.value) ,validateJstartDate)} 
       error ={validJstartDate.error}
       helperText ={ validJstartDate.help}
      />
   

      <Textfield
        label="End Date"
        name= "jendDate"
        defaultValue={defaultValues.jendDate}
        type="email"
        variant="filled"
        id="jendDate"

        onChange ={e => dispatch(changeJobEndDate(e.target.value, i))}
        onBlur= {e => validator(simpleValidation(e.target.value) ,validateJendDate)} 
        error ={validJendDate.error}
        helperText ={ validJendDate.help}
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