import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
import {useSelector , useDispatch} from "react-redux"
import {changeDateOfBirth} from "../action/index"



const useStyles2 = makeStyles((theme) => ({
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

  

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyles2();
  const dispatch = useDispatch();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
     
       
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          className={classes.margin}
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={e => dispatch(changeDateOfBirth(e))}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
    
    </MuiPickersUtilsProvider>
  );
}