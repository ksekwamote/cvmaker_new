import React, { Component } from 'react'
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
  import 'date-fns';
  import InputBase from '@material-ui/core/InputBase';
  import InputLabel from '@material-ui/core/InputLabel';
  import TextField from '@material-ui/core/TextField';
  import FormControl from '@material-ui/core/FormControl';
  import { green } from '@material-ui/core/colors';
  import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from 'react-responsive'


  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        },
      },
    },
  })(TextField);
  
  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);
  
  const useStylesReddit = makeStyles((theme) => ({
    root: {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#fcfcfb',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff',
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
    focused: {},
  }));
  
function RedditTextField(props) {
    const classes = useStylesReddit();
  
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
  }

  

  
  const useStyles = makeStyles((theme) => ({
    root: {
  
     
    },
    margin: {
      margin: theme.spacing(1.5),
      width:300,
      ['@media (max-width:450px)']:{
        width:155
      },
      ['@media screen and (min-width:450px) and  (max-width:660px)']:{
        width:200
      }

      
      
      
    },
  }));
  
  const useStyles2 = makeStyles((theme) => ({
      root: {
    
       
      },
      margin: {
        margin: theme.spacing(1.5),
        width:625, 
        ['@media (max-width:450px)']:{
          width:327
        },
        ['@media screen and (min-width:450px) and (max-width:660px)']:{
          width:425
        }
        
      },
    }));
  
  const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: 'green',
        borderWidth: 5,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 5,
      },
      '& input:valid:focus + fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
        
      },
      '& input:not([value=""]):not(:focus) + fieldset':{
          borderColor :'tomato',
  
      }
    },
  })(TextField);
  
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  
  const useStyles3 = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: 500,
      },
    },
  }));

export  function Textfield(props){
    const classes = useStyles();
        return <RedditTextField  className = {classes.margin} {...props}/>
}
export function Textfield2(props){
    const classes = useStyles2();
        return <RedditTextField  className = {classes.margin} {...props}/>
}

export function Multiline(props){
    const classes = useStyles3();
    return <TextField className={classes.root} {...props}/>

}