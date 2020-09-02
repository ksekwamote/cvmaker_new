import React , {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import RichTextEditor from 'react-rte';
import {nextStep , prevStep , changeFieldOfStudy,changeSchoolName,changeStartDate,changeGradDate} from "../action/index"
import Richtext from "../GUI/Richtext"
import {simpleValidation , isError , validator } from "./Work"


export default function(props){

    const i = props.index
    const defaultValues = useSelector(state => state.education.values.education[i])
    const valid = props.validate
    const dispatch = useDispatch();

    const [validfos, validatefos] = useState({
      error: false,
      help: "E.g Civil Engineering"
    })
    const [validSchoolName, validateSchoolName] = useState({
     error: false ,
     help: ""
   })
    const [validstartDate , validatestartDate] = useState({
     error: false ,
     help: "E.g June 2016"
   })
    const [validgradDate , validategradDate] = useState({
     error: false ,
     help: "E.g June 2021"
   })



    var title;
        if (i>=1){
            title = <h4>Education #{i+1}</h4>
        }
        else{
              title=""
            }
           

    return(

        <Grid container justify="space-around">
    <form noValidate>
    <div style={{textAlign:"center"}}>
        {
          title
        }

    </div>

      <Textfield
        label="Field Of Study"
        name="fos"
        type="text"
        variant="filled"
        id="fos"
        defaultValue={defaultValues.fieldOfStudy}
        onChange ={e => dispatch(changeFieldOfStudy(e.target.value, i ))}
        error ={valid ? isError(defaultValues.fieldOfStudy): validfos.error }
        onBlur= {e => validator(simpleValidation(e.target.value) ,validatefos)} 
        helperText ={ valid ? simpleValidation(defaultValues.fieldOfStudy) : validfos.help}
        required
        

      />

    
        <Textfield
        label="School Name"

        type="text"
        defaultValue={defaultValues.schoolName}
        variant="filled"
       id="schoolName"
       onChange ={e => dispatch(changeSchoolName(e.target.value, i))}
       onBlur= {e => validator(simpleValidation(e.target.value) ,validateSchoolName)} 
       error ={valid ? isError(defaultValues.schoolName): validSchoolName.error }
       helperText ={ valid ? simpleValidation(defaultValues.schoolName) : validSchoolName.help}
       required
      />
    <br></br>

      <Textfield
        label="Start Date"
    
       defaultValue={defaultValues.startDate}
        type="text"
        variant="filled"
       id="startDate"
       onChange ={e => dispatch(changeStartDate(e.target.value, i))}
       onBlur= {e => validator(simpleValidation(e.target.value) ,validatestartDate)} 
       error ={valid ? isError(defaultValues.startDate): validstartDate.error }
       helperText ={ valid ? simpleValidation(defaultValues.startDate) : validstartDate.help}
       required
      />
  

      <Textfield
        label="End Date"
        defaultValue={defaultValues.gradDate}
        type="text"
        variant="filled"
        id="gradDate"
        onChange ={e => dispatch(changeGradDate(e.target.value, i))}
        onBlur= {e => validator(simpleValidation(e.target.value) ,validategradDate)} 
        error ={valid ? isError(defaultValues.gradDate): validgradDate.error }
       helperText ={ valid ? simpleValidation(defaultValues.gradDate) : validgradDate.help}
       required
      />
         
  
      <br></br>
      

     

    
    </form>
    </Grid>

    )
}