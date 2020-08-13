
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
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";

 function Experience(props){

  const works = props.works;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



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
         <div style={{textAlign:"center"}} className="block">
    <a style={{color:'red', fontSize:12}} onClick={handleClickOpen}>Need some help?</a>
    </div>
    <br></br>

      </div>

     
       
<div id="bottom"></div>

<div style={{textAlign:"center"}}>
<a  class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(addExperience())}>+</a>{'      '}
      <a class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remExperience())}>-</a>
      </div>
      
        
       
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a style={{color:'#fff'}} onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a style={{color:'#fff'}} onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
        </div>

    </div>

      </div>

      <div>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Creating a Resume or CV can be quite difficult or cumbersome exercise and we understand. 
         Send us your email below so we can contact you and do the whole thing for you. &#128525; &#128525;
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No Thanks! 
          </Button>
          <Button onClick={handleClose} color="primary">
          <Link to="/email_sent"> Send</Link>
          </Button>
        </DialogActions>
      </Dialog>
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