
import React, { Component } from 'react'
import "../assets/CSS/template_selection.css"
import "../assets/CSS/bootstrap.min.css"
import "../assets/CSS/flex-slider.css"
import "../assets/CSS/font-awesome.css"
import "../assets/CSS/owl-carousel.css"
import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"
import $ from 'jquery';



export default class Templates extends Component {
        constructor(props){
            super(props)
            this.state ={



            }
    }


    componentDidMount () {
        
        $(document).ready(function(){


            $("input[type='radio']").click(function(){
                var radioValue = $("input[name =template]:checked").val();
                $("."+radioValue).css({'filter':'brightness(130%)', 'box-shadow': '0px 0px 50px #7299b3'})
                var radio = "."+radioValue;
                $("img:not("+radio+")").css({'filter':'', 'box-shadow':''})

                
            })

    })
    
    
	}

    render() {
        return (
            <div>
                <Header/>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="wrapper" style={{textAlign:"center"}}>

      
           <h1 style={{ marginTop:"-40px"}}>Resume Templates</h1>
           

       <div className="radio-toolbar" >
               
           <div className="pad20" >

               <lu>
                   <li className="pad10" >
                       <img id="myImg" className="template1" src= {require("../assets/images/templates/template 1.png")}></img>
                           <div id="myModal" class="modal">
                               <span className="close">&times;</span>
                               
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template1" name="template" value="template1"></input>
                           <label for="template1">Template 1</label>

                   </li>
               </lu>
           </div>

           <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template2" src={require("../assets/images/templates/template 2.jpg")} alt="Snow" ></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                             
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template2" name="template" value="template2"></input>
                           <label for="template2">Template 2</label>

                   </li>
               </lu>
           </div>

            <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template3" src={require("../assets/images/templates/template 3.png")} alt="Snow" ></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                           
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template3" name="template" value="template3"></input>
                           <label for="template3">Template 3</label>

                   </li>
               </lu>
           </div>


           <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template4" src={require("../assets/images/templates/template 4.jpg")} alt="Snow"></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                           
                                  
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template4" name="template" value="template4"></input>
                           <label for="template4">Template 4</label>

                   </li>
               </lu>
           </div>

       </div>

       
           


       
       <br></br> <br></br>

       <div className="block">

       <a href="/cvmaker" className="main-button">&nbsp; &nbsp; Continue &nbsp; &nbsp;</a>
      
   </div>





   </div>
   <Footer/>
   </div>
        )
    }
}
