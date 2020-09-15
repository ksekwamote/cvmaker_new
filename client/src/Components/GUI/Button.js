import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {saveAs} from "file-saver";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Buttons(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Button variant="contained" size="large" color="secondary" {...props}>
        DOWNLOAD RESUME! 
      </Button>
    
    </div>
  );
}

export function Button1(props) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Button variant="contained" size="large" color="secondary" {...props}>
        DOWNLOAD EXISTING RESUME
      </Button>
    
    </div>
  );
}