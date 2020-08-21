
import React, { Component ,useState} from 'react'
import Grid from '@material-ui/core/Grid';
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import {changeProfile} from "../action/index"
import {nextStep , prevStep} from "../action/index"
import { CSSTransition } from "react-transition-group"
import Zoom from "@material-ui/core/Zoom"
import FadeIn from 'react-fade-in';
import Email from "../Fragments/Email"
import { validator} from "../Pages/Personal"


const simpleValidation = (value) => {



    if (value == ""){
        return "This field is required"
    }
    else {
      return "valid"
    }
   


}

export default function Profile (){
  
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profiler.profile);
    const [validProfile , validateProfile] = useState({
      error: false,
      help: ""
    })


    const next = (theprofile) =>{

     
      validator(simpleValidation(theprofile), validateProfile)

     
  
    if ( simpleValidation(theprofile)== "valid" ){
            
      dispatch(nextStep())
    }
    else {
  
      console.log("error")
     
    }
  
  }


   

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
          defaultValue={profile}
          onChange ={e => dispatch(changeProfile(e.target.value))}
          onBlur= {e => validator( simpleValidation(e.target.value) ,validateProfile)} 
          variant="outlined"
          error ={validProfile.error}
          helperText ={ validProfile.help}
        />  
        

    </form>
    </Grid>
    <div style={{textAlign:"center"}} className="block">
      <br></br>
        <Email/>
    </div>
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a id="needHelp"  style={{color:'#fff'}} onClick={e => dispatch(prevStep()) } className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a id="needHelp" style={{color:'#fff'}} onClick={e => next(profile) } className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>

   
      

      
        </div>
        
    </div>

    
      </div>
      </React.Fragment>
      </FadeIn>
 
    )
  }



