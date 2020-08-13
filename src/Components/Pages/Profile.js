
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import {changeProfile} from "../action/index"
import {nextStep , prevStep} from "../action/index"
import { CSSTransition } from "react-transition-group"
import Zoom from "@material-ui/core/Zoom"
import FadeIn from 'react-fade-in';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";



export default function Profile (){
  
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
          defaultValue=""
          onChange ={e => dispatch(changeProfile(e.target.value))}
          variant="outlined"
        />  
        

    </form>
    </Grid>
    <div style={{textAlign:"center"}} className="block">
    <a style={{color:'red', fontSize:12}} onClick={handleClickOpen}>Need some help?</a>
    </div>
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a style={{color:'#fff'}} onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a style={{color:'#fff'}} onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>

   
      

      
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

      </div>
      </React.Fragment>
      </FadeIn>
 
    )
  }



