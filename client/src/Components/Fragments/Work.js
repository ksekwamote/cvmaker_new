
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
  

export const simpleValidation = (value) => {
  if (value == ""){
      return "This field is required"
  }
  else {
    return ""
  }
}

export const isError = (value) =>{

  if (value == ""){
    return true
}
else {
  return false
}

}


export default function Work (props){
    const formRef = React.createRef();
    const dispatch = useDispatch();
    const i = props.index
    const valid = props.validate
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
     help: "E.g June 2015"
   })
    const [validJendDate , validateJendDate] = useState({
     error: false ,
     help: "E.g December 2017, Present"
   })

  

  
  

  
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
        error ={valid ? isError(defaultValues.employer): validEmployer.error }
        helperText ={ valid ? simpleValidation(defaultValues.employer) : validEmployer.help}
        required
        

      />

    
        <Textfield
        label="Job Title"

        type="text"
        defaultValue={defaultValues.position}
        variant="filled"
       id="jobTitle"
       onChange ={e => dispatch(changeJob(e.target.value, i))}
       onBlur= {e => validator(simpleValidation(e.target.value) ,validatePosition)} 
       error ={valid ? isError(defaultValues.position): validPosition.error }
       helperText ={ valid ? simpleValidation(defaultValues.position) : validPosition.help}
       required
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
       error ={valid ? isError(defaultValues.jstartDate): validJstartDate.error }
       helperText ={ valid ? simpleValidation(defaultValues.jstartDate) : validJstartDate.help}
       required
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
        error ={valid ? isError(defaultValues.jendDate): validateJendDate.error }
       helperText ={ valid ? simpleValidation(defaultValues.jendDate) : validateJendDate.help}
        required
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