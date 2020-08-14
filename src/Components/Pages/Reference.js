
import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import {prevStep, nextStep, addReference, remReference ,changeReferentName,changeOccupation,changeCompany,changeRPhoneNumber} from "../action/index"
import Referent from "../Fragments/Referent"
import FadeIn from 'react-fade-in';
import axios from "axios"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";
import ReactPayPal from "../Fragments/ReactPayPal"

const onSubmit = (reduxState , dispatch) =>
 {

 axios.post("http://localhost:5001/create-resume",reduxState)

 dispatch(nextStep())
} 

export default function Reference() {


 const dispatch = useDispatch();
 const schools = useSelector(state => state.reference.values.refree)
 const reduxState = useSelector(state => state)
 
 const [open, setOpen] = React.useState(false);
 const [checkout, setCheckout] = React.useState(false);

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
        <h4>REFERENCE</h4>

        <div style={{textAlign:"center",paddingRight:50 , paddingLeft:50, wordBreak: "break-word"}}>
        <p>A reference is someone who your future employer will contact to verify your credentials.</p>
        <p>A positive recommendation by your references has great potential to help you get you hired </p>
        </div>
        </div>
        
      <div>

      { 

      schools.map( (item, index) => (
        <FadeIn>
          <Referent index ={index} />
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
<a  class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(addReference())}>+</a>{'      '}
      <a class="main-button-slider" style={{color:'#fff'}} onClick={e => dispatch(remReference())}>-</a>
      </div>
      
        
       
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a style={{color:'#fff'}} onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a style={{color:'#fff'}} onClick={e => onSubmit(reduxState , dispatch)} className="main-button">&nbsp; &nbsp; MAKE CV &nbsp; &nbsp;</a>
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
        </FadeIn>
    )
}