
import React, { Component } from 'react'

import Buttons from "../GUI/Button"


import Zoom from "@material-ui/core/Zoom"
import FadeIn from 'react-fade-in';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import {saveAs} from 'file-saver';
import $ from "jquery"



export default class Download extends Component{
  
      constructor(props){
        super(props)  
        //this.createAndDownloadPdf = this.createAndDownloadPdf.bind(this)
          this.checkFile = this.checkFile.bind(this)
        this.state = {

            loading: false

          }

      }


      componentDidMount =()=> {

        $("#btn_download").click(function(){
          window.open('http://localhost:5001/My_Resume');
      })


      }

      fetchData = () =>{
        this.setState({loading : true})
      }



  checkFile = () => {

   
               
      axios.get('http://localhost:5001/download')
                    .then((res) => {

            })

            .catch(error => {
              this.setState({loading:true})
            })
    

 }



  render(){
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

        <Buttons id="btn_download"  onClick ={this.fetchData} disabled ={this.state.loadingloading}/>
        {this.state.loading && <div >
          <div className="spinner-grow text-muted"></div>
<div className="spinner-grow text-primary"></div>
<div className="spinner-grow text-success"></div>
<div className="spinner-grow text-info"></div>
<div className="spinner-grow text-warning"></div>
<div className="spinner-grow text-danger"></div>
<div className="spinner-grow text-secondary"></div>
<div className="spinner-grow text-dark"></div>
<div className="spinner-grow text-light"></div>
          
          </div>} 
        </div>
        </div>
      
    
   
      </React.Fragment>
      </FadeIn>
 
    )
  }
}


