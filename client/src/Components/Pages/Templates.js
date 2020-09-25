
import React, { useEffect , Component} from 'react';
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
import FadeIn from 'react-fade-in';
import {Helmet} from 'react-helmet'
import Lazyload from "react-lazyload";
import {initGA,  GApageView} from "./../../index"




const Spinner = () => (
    <div className= "post loading">
            <h5></h5>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    </div>
)


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
        
        GApageView("/templates")
        
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
        console.log(this.state.template)
    }

    render() {
        
               const {works}  = this.props; 
             

        return (
            <Lazyload
            key={101049}
            height={100}
            offset={[-100, 100]}
            placeholder = {<Spinner/>}
            >
            <div>
                <Helmet>
                    <title>Free Professional Resume Templates </title>
                    <meta name="description" content="Our collection of stunning and eye catching resume templates designed by career expert will help you stand out and leave a lasting impression on potential employers." />
                </Helmet>
                <Header/>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                <FadeIn>
            <div className="wrapper" style={{textAlign:"center"}}>
            {window.scrollTo(0,0)}
      
           <h4 style={{ marginTop:"-40px"}}>Resume Templates</h4>
           

       <div className="radio-toolbar" >
               
           <div className="pad20" >

               <lu>
                   <li className="pad10" >
                       <img id="myImg" className="template1" onError={e => e.target.src =require("../assets/images/templates/template 1.png")}  src= {require("../assets/images/templates/template 1.webp")} alt="Template 1"></img>
                           <div id="myModal" class="modal">
                               <span className="close">&times;</span> 
                           </div>
                   </li>
                   <li className="pad10">
                           <input type="radio" id="template1" onChange ={e => this.props.pick_template("template1")} name="template" value="template1" ></input> 
                           <label for="template1" >Simplex</label>
                   </li>
               </lu>
           </div>

           <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template2" onError={e => e.target.src =require("../assets/images/templates/template 2.jpg")} src={require("../assets/images/templates/template 2.webp")} alt="Template 2" ></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                             
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template2"  onChange ={e => this.props.pick_template("template2")} name="template" value="template2"></input>
                           <label for="template2"  >Camel Stripe</label>

                   </li>
               </lu>
           </div>

            <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template3" onError={e => e.target.src =require("../assets/images/templates/template 3.png")} src={require("../assets/images/templates/template 3.webp")} alt="Template 3" ></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>
                           
                           </div>
                   </li>

                   <li className="pad10">
                   
                   
                           <input type="radio" id="template3"  onChange ={e => this.props.pick_template("template3")} name="template" value="template3"></input>
                           <label for="template3" >Stripe Navy</label>

                   </li>
               </lu>
           </div>


           <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template4" onError={e => e.target.src =require("../assets/images/templates/template 4.jpg")} src={require("../assets/images/templates/template 4.webp")} alt="Template 4"></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>         
                           </div>
                   </li>
                   <li className="pad10">
                           <input type="radio" id="template4" name="template"  onChange ={e => this.props.pick_template("template4")} value="template4"></input>
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
                       <img id="myImg" className="template5" onError={e => e.target.src =require("../assets/images/templates/template 5.png")} src={require("../assets/images/templates/template 5.webp")} alt="Template 5"></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>        
                           </div>
                   </li>
                   <li className="pad10">
                           <input type="radio" id="template5" name="template"  onChange ={e => this.props.pick_template("template5")} value="template5"></input>
                           <label for="template5" >Cappuccino</label>
                   </li>
               </lu>
           </div>


           <div className="pad20">
               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template6" onError={e => e.target.src =require("../assets/images/templates/template 6.png")} src={require("../assets/images/templates/template 6.webp")} alt="Template 6"></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>      
                           </div>
                   </li>
                   <li className="pad10">
                           <input type="radio" id="template6" name="template"  onChange ={e => this.props.pick_template("template6")} value="template6"></input>
                           <label for="template6" >Blueberry</label>

                   </li>
               </lu>
           </div>


           <div className="pad20">
               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template7" onError={e => e.target.src =require("../assets/images/templates/template 7.png")} src={require("../assets/images/templates/template 7.webp")} alt="Template 7"></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>         
                           </div>
                   </li>
                   <li className="pad10">
                           <input type="radio" id="template7" name="template"  onChange ={e => this.props.pick_template("template7")} value="template7"></input>
                           <label for="template7" >Golden Navy</label>

                   </li>
               </lu>
           </div>


           <div className="pad20">

               <lu>
                   <li className="pad10">
                       <img id="myImg" className="template8" onError={e => e.target.src =require("../assets/images/templates/template 8.png")} src={require("../assets/images/templates/template 8.webp")} alt="template8"></img>
                           <div id="myModal" className="modal">
                               <span className="close">&times;</span>      
                           </div>
                   </li>

                   <li className="pad10">
                           <input type="radio" id="template8" name="template"  onChange ={e => this.props.pick_template("template8")} value="template8"></input>
                           <label for="template8" >Golden Sky</label>

                   </li>
               </lu>
           </div>

       </div>

       
           


       
       <br></br> <br></br>

     
      <Link className="main-button"  style={{color:"#fff"}} to="/resumake">&nbsp; &nbsp; Continue &nbsp; &nbsp;</Link>






   </div>
   </FadeIn>
   <Footer/>
   </div>
   </Lazyload>

 
        )
    }
}


export default connect(mapStateToProps ,mapDispatchToProps)(Templates)
