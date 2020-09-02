import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import axios from "axios"

export default function Email() {

    const [open, setOpen] = React.useState(false);
    const [email , setEmail]= React.useState("me@yahoo.com");
    const [link , setLink] = React.useState("/multi")


    const styles ={
        color:'red',
         fontSize:12,
         "&:hover": {
            color: "#0088e8f"
          }
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
 
  };

  const handleChange =(value) =>{

    setEmail(value)
    const re = /\S+@\S+\.\S+/;
    const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if(value==""){
      return 
    }

    if (re.test(email)){
      setLink("/email_sent")
   
        
       
    }

    else  if (regex.test(email)){
      setLink("/phone_sent")

       
        //console.log("Phone set" + link)
       
       
      }
      else{
  
          setLink("/multi")
      }


  }

  const handleClose2 = (value) => {
    
    const re = /\S+@\S+\.\S+/;
    const regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (re.test(email)){
      sendEmail(email)
   
        
       
    }

    else  if (regex.test(email)){
      sendPhone(email)

       
        //console.log("Phone set" + link)
       
       
      }
      else{
  
          setLink("/multi")
      }
    //sendEmail(email)
    setOpen(false);
   
  };


 const sendEmail = (value) =>{
  var template_params = {
    "from_name": value
 }
 
 var service_id = "default_service";
 var template_id = "template_DhRX5H1o";
 var user_id ="user_4aFD7YULlH83qEgcPfsEG"


  
 emailjs.send(service_id, template_id, template_params, user_id)
        .then((response) => {
          //console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
         // console.log('FAILED...', err);
        });

 }

 const sendPhone = (value) => {
  var template_params = {
    "from_name": value
 }
 
 var service_id = "default_service";
 var template_id = "template_DhRX5H1o";
 var user_id =process.env.user_id;

 emailjs.send(service_id, template_id, template_params , user_id)
 .then((response) => {
 // console.log('SUCCESS! Number', response.status, response.text);
}, (err) => {
 // console.log('FAILED... Number', err);
});
 
 }




    return (
        <div>
            

            <a id="needHelp"  onClick={handleClickOpen}>Need some help?</a>

            <div>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Need some Help?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Creating a Resume or CV can be quite difficult or cumbersome exercise and we understand. 
         Send us your Email &#128231; or Whatsapp Phone Number &#128241; (with country code e.g '+1') so we can contact you and do the whole thing for you. &#128525; &#128525;
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label=" Enter your Email or Whatsapp"
            type="email"
            onChange ={ e => handleChange(e.target.value)}
            onBlur={ e => handleChange(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No Thanks! 
          </Button>
          <Button onClick={handleClose2} color="primary">
            <Link to={link}> Send</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        </div>
    )
}
