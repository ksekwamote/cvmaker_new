import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import RichTextEditor from 'react-rte';
import {nextStep , prevStep } from "../action/index"
import Richtext from "../GUI/Richtext"
import { changeRemail, addReference, remReference ,changeReferentName,changeOccupation,changeCompany,changeRPhoneNumber} from "../action/index"

export default function Referent(props) {
        const i  = props.index
        const dispatch = useDispatch()
        var title;
            if (i>=1){
            title = <h2>Reference #{i+1}</h2>
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
            label="Referent Name"
            name="rname"
            type="text"
            variant="filled"
            id="rname"
           // defaultValue={defaultValues.employer}
         onChange ={e => dispatch(changeReferentName(e.target.value, i ))}
    
          />
    
        
            <Textfield
            label="Occupation"
    
            type="text"
           // defaultValue={defaultValues.position}
            variant="filled"
           id="occupation"
          onChange ={e => dispatch(changeOccupation(e.target.value, i))}
          />
        <br></br>
    
          <Textfield
            label="Company Name"
        
           // defaultValue={defaultValues.jstartDate}
            type="text"
            variant="filled"
           id="company"
           onChange ={e => dispatch(changeCompany(e.target.value, i))}
          />
       
    
          <Textfield
            label="Email"
       
           // defaultValue={defaultValues.jendDate}
            type="email"
            variant="filled"
            id="email"
            onChange ={e => dispatch(changeRemail(e.target.value, i))}
          />

          <br></br>

            <Textfield
            label="Phone Number "
       
           // defaultValue={defaultValues.jendDate}
            type="text"
            variant="filled"
            id="phone"
           onChange ={e => dispatch(changeRPhoneNumber(e.target.value, i))}
          />
             
      
          <br></br>
          
    
         
    
        
        </form>
        </Grid>
    )
}
