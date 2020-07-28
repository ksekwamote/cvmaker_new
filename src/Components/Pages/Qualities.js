import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import {nextStep , prevStep ,changeQualities} from "../action/index"


export default function Qualities() {
    const dispatch = useDispatch();
   
    return (
        <React.Fragment>
      <div>


        <div>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h1>QUALITIES</h1>
        <br></br><br></br>
        </div>
        
    <Grid container justify="space-around">
    <form noValidate>     

        <Multiline
          id="outlined-multiline-static"
          label="Qualities"
          multiline
          rows={10}     
          defaultValue=""
          onChange ={ e=> {dispatch(changeQualities(e.target.value))}}
          variant="outlined"
        />  

    </form>
    </Grid>
    <div style={{textAlign:"center"}} className="block">
              <br></br><br></br>
              <a href="#" onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a href="#" onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>

        </div>

    </div>

      </div>
      </React.Fragment>
    )
}
