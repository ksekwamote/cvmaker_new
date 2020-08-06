
import React, { Component } from 'react'

import Buttons from "../GUI/Button"


import Zoom from "@material-ui/core/Zoom"
import FadeIn from 'react-fade-in';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import {saveAs} from 'file-saver';


const createAndDownloadPdf =() => {

    return event => {
        event.preventDefault();

                axios.get('http://localhost:5001/download', {responseType: 'blob'})
                    .then((res) => {
                      
                        const pdfBlob = new Blob([res.data], {type: 'application/pdf'});

                    saveAs(pdfBlob, 'newPdf.pdf');

            })
    
}
 }


export default function Download (){
  

    return (
      <FadeIn>
      <React.Fragment>


        <div>

      <br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
            <Grid justify="center">
            <h4>DOWNLOAD YOUR RESUME</h4>
            </Grid>

            <span style={{fontSize:90}}>&#8595;</span>
        
        
        <br></br><br></br>

        <Buttons onClick={e => createAndDownloadPdf} />
        </div>
        </div>
      
    
   
      </React.Fragment>
      </FadeIn>
 
    )
  }



