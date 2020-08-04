
import React from 'react'

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

 function Experience(props){

  const works = props.works;
  const dispatch = useDispatch();
  const num = useSelector(state => state.experiences.number)
  console.log(num)


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
      { 
      
      
      works.map( (item, index) => (
        <FadeIn>
          <Work index ={index} />
          </FadeIn>
      )) 

      }
      </div>
       
<div id="bottom"></div>

<div style={{textAlign:"center"}}>
<a href="#bottom" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(addExperience())}>+</a>{'      '}
      <a href="#bottom" class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remExperience())}>-</a>
      </div>
      
        
       
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a href="#Profile" onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a href="#Qualifications" onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
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