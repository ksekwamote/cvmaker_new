import React ,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import RichTextEditor from 'react-rte';
import {nextStep , prevStep } from "../action/index"
import Richtext from "../GUI/Richtext"
import { changeRemail, addReference, remReference ,changeReferentName,changeOccupation,changeCompany,changeRPhoneNumber} from "../action/index"
import {simpleValidation , isError , validator } from "./Work"


export default function Referent(props) {
        const i  = props.index
        const dispatch = useDispatch()
        const valid = props.validate
        const defaultValues = useSelector(state => state.reference.values.refree[i])
        var title;
            if (i>=1){
            title = <h4>Reference #{i+1}</h4>
            }
            else{
              title=""
            }
      
       const [validReferent, validateReferent] = useState({
              error: false,
              help: ""
            })
       const [validOccupation, validateOccupation] = useState({
             error: false ,
             help: ""
           })
       const [validCompany , validateCompany] = useState({
             error: false ,
             help: ""
           })
       const [validEmail , validateEmail] = useState({
             error: false ,
             help: ""
           })
           const [validPhone , validatePhone] = useState({
            error: false ,
            help: "+27 72 979 5555"
          })


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
            
            defaultValue={defaultValues.referent}
            onChange ={e => dispatch(changeReferentName(e.target.value, i ))}
            error ={valid ? isError(defaultValues.referent): validReferent.error }
            onBlur= {e => validator(simpleValidation(e.target.value) ,validateReferent)} 
            helperText ={ valid ? simpleValidation(defaultValues.referent) : validReferent.help}
            required
    
          />
    
        
            <Textfield
            label="Occupation"
    
            type="text"
           defaultValue={defaultValues.occupation}
            variant="filled"
           id="occupation"
          onChange ={e => dispatch(changeOccupation(e.target.value, i))}
          error ={valid ? isError(defaultValues.occupation): validOccupation.error }
          onBlur= {e => validator(simpleValidation(e.target.value) ,validateOccupation)} 
          helperText ={ valid ? simpleValidation(defaultValues.occupation) : validOccupation.help}
          required
  
          />
        <br></br>
    
          <Textfield
            label="Company Name"
        
            defaultValue={defaultValues.company}
            type="text"
            variant="filled"
           id="company"
           onChange ={e => dispatch(changeCompany(e.target.value, i))}
           error ={valid ? isError(defaultValues.company): validCompany.error }
           onBlur= {e => validator(simpleValidation(e.target.value) ,validateCompany)} 
           helperText ={ valid ? simpleValidation(defaultValues.company) : validCompany.help}
           required
   
          />
       
    
          <Textfield
            label="Email"
       
            defaultValue={defaultValues.email}
            type="email"
            variant="filled"
            id="email"
            onChange ={e => dispatch(changeRemail(e.target.value, i))}
            error ={valid ? isError(defaultValues.email): validEmail.error }
            onBlur= {e => validator(simpleValidation(e.target.value) ,validateEmail)} 
            helperText ={ valid ? simpleValidation(defaultValues.email) : validEmail.help}
            required
          />

          <br></br>

            <Textfield
            label="Phone Number "
       
            defaultValue={defaultValues.phone}
            type="text"
            variant="filled"
            id="phone"
           onChange ={e => dispatch(changeRPhoneNumber(e.target.value, i))}
           error ={valid ? isError(defaultValues.phone): validPhone.error }
           onBlur= {e => validator(simpleValidation(e.target.value) ,validatePhone)} 
           helperText ={ valid ? simpleValidation(defaultValues.phone) : validPhone.help}
           required
          />
             
      
          <br></br>
          
    
         
    
        
        </form>
        </Grid>
    )
}
