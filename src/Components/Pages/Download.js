
import React, { Component } from 'react'
import Buttons from "../GUI/Button"
import Zoom from "@material-ui/core/Zoom"
import FadeIn from 'react-fade-in';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'

import $ from "jquery"

import 'react-sharingbuttons/dist/main.css'
import { PayPalButton } from "react-paypal-button-v2";
import ReactPayPal from "../Fragments/ReactPayPal"





export default class Download extends Component{
  
      constructor(props){
        super(props)  
        //this.createAndDownloadPdf = this.createAndDownloadPdf.bind(this)
          this.checkFile = this.checkFile.bind(this)
         
        this.state = {

            loading: true,
            disable:true

          }

      }


      componentDidMount =()=> {

           this.fetchData()

            $("#btn_download").click(function(){
              window.open('http://localhost:5001/My_Resume');
             
          })


          


      }



      fetchData = () =>{
        const interval = setInterval(() => {
          if (this.state.loading){
          this.checkFile();}
          else {clearInterval(interval)}
        }, 3000);
      }


   


  checkFile = () => {

   
               
      axios.get('http://localhost:5001/download')
                    .then((res) => {

                     console.log("we good to go")
                     this.setState({loading:false})
                     this.setState({disable:false})
            })

            .catch(error => {
              console.log("Erroor sorrry")
              
            })
    

 }

 



  render(){
    const url = 'https://github.com/caspg/react-sharingbuttons'
    const shareText = 'Guys i just found the perferct site to create a resume, very proffesional!'

    return (
      <FadeIn>
      <React.Fragment>
        

        <div>

      <br></br><br></br><br></br><br></br><br></br>
        <div style={{textAlign:"center"}}>
            <Grid justify="center">
            <h4>DOWNLOAD YOUR RESUME</h4>


            <Grid justify="center">

            <span style={{textAlign:"center", justifyContent:"center" , marginLeft:500, paddingLeft:500} }>
            <div style={{borderStyle:"solid",padding:10, borderRadius:10, height:450, width:400 ,marginLeft:500, backgroundColor:'#c4e0e4'}}>
             <h3 style={{color:"black"}}>KINDLY SUPPORT US</h3>
              <br></br>
              <p>This is a free application but is very expensive to maintain. We feel it was important to create this platform to
              help and assist those who are unable to do Resumes for themselves. To support this endavour by AFRICAN DEVELOPERS. You 
              can DONATE via PAYPAL or SHARE our webiste on your social media.</p>

              <Facebook url={url} shareText={shareText} />
              <Twitter url={url} shareText={shareText} />
              <PayPalButton
                    amount="8.00"
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                      alert("Transaction completed by " + details.payer.name.given_name);
            
                      // OPTIONAL: Call your server to save the transaction
                      
                    }}
                    options={{
                      clientId: "AZFoQTy8SIilPxdMmHc6F3zIlST067a5xUFijD4AXSKB5eF3B-qRRSGgN5a-Myz2ZL4B21zv8lAl9VZ0"
                   }}
           />

                   





</div>


</span>


</Grid>


            </Grid>

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


