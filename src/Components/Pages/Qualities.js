import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Textfield, Textfield2, Multiline} from "../GUI/Textfield"
import {useSelector , useDispatch} from "react-redux"
import {nextStep , prevStep ,changeQualities} from "../action/index"
import FadeIn from 'react-fade-in';

export default function Qualities() {
    const dispatch = useDispatch();
   
    return (

      <FadeIn>
        <React.Fragment>
      <div>


        <div>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
        <h1>QUALIFICATIONS</h1>
      

        <p>List key achievements, skills, experience, and the qualifications <br></br> that are most relevant to the position you're applying for.</p>
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
              <a href="#Experience" onClick={e => dispatch(prevStep())} className="main-button">&nbsp; &nbsp; Back &nbsp; &nbsp;</a> {'     '} <div>&nbsp;</div>
              <a href="#Education" onClick={e => dispatch(nextStep())} className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>

        </div>

    </div>

      </div>
      </React.Fragment>
      </FadeIn>
    )
}
