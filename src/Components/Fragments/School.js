import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import RichTextEditor from 'react-rte';
import {nextStep , prevStep , changeFieldOfStudy,changeSchoolName,changeStartDate,changeGradDate} from "../action/index"
import Richtext from "../GUI/Richtext"

export default function(props){

    const i = props.index
    const defaultValues = useSelector(state => state.experiences.values.work[i])
            const dispatch = useDispatch();

            var title;
            if (i>=1){
            title = <h2>Education #{i+1}</h2>
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
       // defaultValue={defaultValues.employer}
        onChange ={e => dispatch(changeFieldOfStudy(e.target.value, i ))}
        

      />

    
        <Textfield
        label="School Name"

        type="text"
       // defaultValue={defaultValues.position}
        variant="filled"
       id="schoolName"
       onChange ={e => dispatch(changeSchoolName(e.target.value, i))}
      />
    <br></br>

      <Textfield
        label="Start Date"
    
       // defaultValue={defaultValues.jstartDate}
        type="text"
        variant="filled"
       id="startDate"
       onChange ={e => dispatch(changeStartDate(e.target.value, i))}
      />
   

      <Textfield
        label="End Date"
   
       // defaultValue={defaultValues.jendDate}
        type="text"
        variant="filled"
        id="gradDate"
        onChange ={e => dispatch(changeGradDate(e.target.value, i))}
      />
         
  
      <br></br>
      

     

    
    </form>
    </Grid>

    )
}