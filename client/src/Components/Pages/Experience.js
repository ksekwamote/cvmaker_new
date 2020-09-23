
import React  , {useEffect} from 'react'
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import RichTextEditor from 'react-rte';
import {nextStep , prevStep} from "../action/index"
import Richtext from "../GUI/Richtext"
import {changeEmployer ,addNumber, changeJob , changeJobStartDate , changeJobEndDate ,changeJobDescription ,addExperience ,remExperience } from "../action/index"
import Work from "../Fragments/Work"
import {connect} from "react-redux"
import FadeIn from 'react-fade-in';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";
import Email from "../Fragments/Email"
import { textValidation , validator } from "../Pages/Personal";
import { getNodeText } from '@testing-library/react';



export const simpleValidation = (value) => {
  if (value == ""){
      return "This field is required"
  }
  else {
    return "valid"
  }

}






 function Experience(props){

  const works = props.works;
  const dispatch = useDispatch();
  
  const [validate, setValidate] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const addButton = () => {

    dispatch(addExperience())
    setValidate(false)
    var scrollDiv = document.getElementById("scroll")

    window.scrollTo(0, scrollDiv.scrollHeight-30 )
    
  }

  const next = () => {

    setValidate(true)


    for(var i=0; i< works.length ; i++){

       if (simpleValidation(works[i].employer)=="valid" && simpleValidation(works[i].position)=="valid" && simpleValidation(works[i].jstartDate)=="valid" && simpleValidation(works[i].jendDate)=="valid"){

              continue
       }

       else{
            return false

 
            
       }

    }

   return true 
  }

    return (
      <FadeIn>
        <Grid container justify="center" alignItems="center">
        <React.Fragment>
                <div>
  
      <div>

      <br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h4>WORK EXPERIENCE</h4>
        <div style={{textAlign:"center",paddingRight:50 , paddingLeft:50, wordBreak: "break-word"}}>
            <p>Many employers regard the description of work experience  as the most important part of <br></br> a resume. As such, this section could be key in moving you forward in the hiring process.</p>
      </div>
        </div>
        
     

          <div>
      <div id="scroll">
      { 
      
      
      works.map( (item, index) => (
        <FadeIn>
          <Work index ={index} validate = {validate} />
          </FadeIn>
      )) 

     

      }
         <div style={{textAlign:"center"}} className="block">
          <Email/>
    </div>
    <br></br>

      </div>

     
       
    <div id="bottom"></div>

<div style={{textAlign:"center"}}>
<a id="needHelp" class="main-button-slider" style={{color:'#fff' }} onClick={e => addButton() }>+</a>{'      '}
      <a id="needHelp" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remExperience())}>-</a>
     
      </div>
      
      </div>

     
     
        
       
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a id="needHelp" style={{color:'#fff'}} onClick={e => dispatch(prevStep())} className="main-button"><strong>&nbsp; &nbsp; Back &nbsp; &nbsp;</strong></a> {'     '} <div>&nbsp;</div>
              <a id="needHelp" style={{color:'#fff', animation: "shake 0.1s"}} onClick={e => next() ? dispatch(nextStep()): console.log("")} className="main-button"><strong>&nbsp; &nbsp; Continue &nbsp; &nbsp;</strong></a>
        </div>

    </div>

      </div>

      

        </React.Fragment>
        </Grid>
        </FadeIn>
      
    )




}

const mapStateToProps = (state, dispatch) => {
  return {
    works: state.experiences.values.work


  }

}

export default connect(mapStateToProps)(Experience);