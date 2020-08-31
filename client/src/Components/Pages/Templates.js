
import React, { Component } from 'react'
import "../assets/CSS/template_selection.css"
import "../assets/CSS/bootstrap.min.css"
import "../assets/CSS/flex-slider.css"
import "../assets/CSS/font-awesome.css"
import "../assets/CSS/owl-carousel.css"
import Header from "../Fragments/Header"
import Footer from "../Fragments/Footer"
import $ from 'jquery';
import { Link } from "react-router-dom";
import {useSelector , useDispatch} from "react-redux"
import {changeTemplate} from "../action/index"
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'


const mapStateToProps = (state , dispatch) => {
    return {
      works: state.experiences.values.work
  
  
    }
  
  }

const mapDispatchToProps = (dispatch) => {
    return {

        pick_template : (par => dispatch(changeTemplate(par)))

    }
}

class Templates extends Component {

    constructor(props){
        super(props)
        this.state ={
            template:"template1"
        }
        this.handleChange = this.handleChange.bind(this)
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
    
    handleChange = e => {
        this.setState({template:e.target.value})
    }

    render() {
        
               const {works}  = this.props; 
             

        return (
            <div>
                <Header/>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="wrapper" style={{textAlign:"center"}}>
                {console.log(works)}
      
           <h4 style={{ marginTop:"-40px"}}>Resume Templates</h4>
           

       <div className="radio-toolbar" >
               
           <div className="pad20" >

               <lu>
                   <li className="pad10" >
                       <img id="myImg" className="template1" src= {require("../assets/images/templates/template 1.png")} alt="Template 1"></img>
                           <div id="myModal" class="modal">
                               <span className="close">&times;</span>
                               
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template1" onChange ={this.handleChange} name="template" value="template1" ></input>
                           
                           <label for="template1" >Simplex</label>

                   </li>
               </lu>
           </div>

           <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template2" src={require("../assets/images/templates/template 2.jpg")} alt="Template 2" ></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                             
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template2" onChange={this.handleChange} name="template" value="template2"></input>
                           <label for="template2"  >Camel Stripe</label>

                   </li>
               </lu>
           </div>

            <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template3" src={require("../assets/images/templates/template 3.png")} alt="Template 3" ></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                           
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template3" onChange={this.handleChange} name="template" value="template3"></input>
                           <label for="template3" >Stripe Navy</label>

                   </li>
               </lu>
           </div>


           <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template4" src={require("../assets/images/templates/template 4.jpg")} alt="Template 4"></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                           
                                  
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template4" name="template"onChange={this.handleChange} value="template4"></input>
                           <label for="template4" >Navy Seal</label>

                   </li>
               </lu>
           </div>

            </div>
            <br></br>
            <div className="radio-toolbar" >
          
           <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template5" src={require("../assets/images/templates/template 5.png")} alt="Template 5"></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                           
                                  
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template5" name="template"onChange={this.handleChange} value="template5"></input>
                           <label for="template5" >Cappuccino</label>

                   </li>
               </lu>
           </div>


           <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template6" src={require("../assets/images/templates/template 6.png")} alt="Template 6"></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                           
                                  
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template6" name="template"onChange={this.handleChange} value="template6"></input>
                           <label for="template6" >Blueberry</label>

                   </li>
               </lu>
           </div>


           <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template7" src={require("../assets/images/templates/template 7.png")} alt="Template 7"></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                           
                                  
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template7" name="template"onChange={this.handleChange} value="template7"></input>
                           <label for="template7" >Golden Navy</label>

                   </li>
               </lu>
           </div>

           <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template8" src={require("../assets/images/templates/template 8.png")} alt="template8"></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                           
                                  
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template8" name="template" onChange={this.handleChange} value="template8"></input>
                           <label for="template8" >Golden Sky</label>

                   </li>
               </lu>
           </div>

       </div>

       
           


       
       <br></br> <br></br>

       <div className="block">

       <a className="main-button" onClick={this.props.pick_template(this.state.template)} ><Link style={{color:"#fff"}} to="/multi">&nbsp; &nbsp; Continue &nbsp; &nbsp;</Link></a>
      
   </div>





   </div>
   <Footer/>
   </div>
        )
    }
}


export default connect(mapStateToProps ,mapDispatchToProps)(Templates)
