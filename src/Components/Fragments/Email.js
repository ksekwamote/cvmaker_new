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

  const handleClose2 = () => {
    
    const re = /\S+@\S+\.\S+/;
    const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

    if (re.test(email)){
        setOpen(false);
        sendEmail(email)
    }
    else{
      setOpen(false);
      axios.post("http://localhost:5001/send_whatsapp")
    }
   
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
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });

 }




    return (
        <div>
            

            <a id="needHelp"  onClick={handleClickOpen}>Need some help?</a>

            <div>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Creating a Resume or CV can be quite difficult or cumbersome exercise and we understand. 
         Send us your Email below so we can contact you and do the whole thing for you. &#128525; &#128525;
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            onChange ={ e => setEmail(e.target.value) }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No Thanks! 
          </Button>
          <Button onClick={handleClose2} color="primary">
            <Link to="/email_sent"> Send</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        </div>
    )
}
