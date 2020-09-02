import React, { Component } from 'react'
import Buttons from "../GUI/Button"
import Zoom from "@material-ui/core/Zoom"
import FadeIn from 'react-fade-in';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import $ from "jquery"
import emailjs from 'emailjs-com';
import Support from "../Fragments/Support"
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
import 'react-sharingbuttons/dist/main.css'
import { Redirect } from "react-router-dom"
import { Link } from "react-router-dom";



export default class Download extends Component{
  
      constructor(props){
        super(props)  
  
          this.checkFile = this.checkFile.bind(this)
         
          
        this.state = {

            loading: true,
            disable:true,
            count :0

          }

      }
   

      componentDidMount =()=> {

           this.fetchData()

            $("#btn_download").click(function(){
              window.open('/My_Resume');
             
          })


          


      }



      fetchData = () =>{

      
        
        const interval = setInterval(() => {
          if (this.state.loading && this.state.count<15 ){
          this.checkFile();}
          else {
            clearInterval(interval)
            //console.log("an error occured")
             window.location.href="http://localhost:3000/#/error"
           
          
          }
        }, 3000);
        
      }


   


  checkFile = () => {            
      axios.get('/download')
                    .then((res) => {
                     this.setState({loading:false})
                     this.setState({disable:false})
            })

            .catch(error => {
              this.setState({count:this.state.count+1})
             // console.log("Just a moment... " + this.state.count)
              
            })
    

 }




  render(){
   
    const url = 'https://github.com/caspg/react-sharingbuttons'
    const shareText = 'Guys i just found the perfect site to create a resume, very proffesional!'
    return (
      <FadeIn>
      <React.Fragment>
      
        <div>

      <br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center", color:"#253B80"}}>

            <h4>DOWNLOAD YOUR RESUME</h4>

            <br></br>
                          <div id="cover">

              <h3 style={{color:"black"}}><strong>SHOW YOUR SUPPORT</strong></h3>
                  <br></br>

              <p id="para">
              This is a free application but is very expensive to maintain.
                        We feel it was important to create this platform to help and   
                  assist those who are unable to do Resumes for themselves.
                  To support this endavour by AFRICAN DEVELOPERS. You 
                  can DONATE via PAYPAL or SHARE our webiste on 
                  your social media.</p>


                  <br></br>
                  <Facebook url={url} shareText={shareText} />
                  <Twitter url={url} shareText={shareText} />
                  <br></br><br></br>

                  
                  <a href="https://www.paypal.com/paypalme/ksekwamote" target="_blank" >Donate via Paypal</a>
                  <br></br>
                  <a href="https://www.paypal.com/paypalme/ksekwamote" target="_blank" class="btn"></a>
                  <br></br><br></br>
                  </div>

          
        

            <span style={{fontSize:90}}>&#8595;</span>
        
        
            <br></br><br></br>


 



        {this.state.loading && <div >

                          <div style={{width:30, height:30}} className="spinner-grow text-muted"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-primary"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-success"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-info"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-warning"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-danger"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-secondary"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-dark"></div>
                <div style={{width:30, height:30}}  className="spinner-grow text-light"></div>
                          
          </div>} 


          




                
       <Buttons id="btn_download" disabled={this.state.disable} /> 
       

       <br></br> <br></br>
        </div>
        </div>
            
        
      
    
   
      </React.Fragment>
      </FadeIn>
 
    )
  }
}


