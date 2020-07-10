import React, { Component } from 'react'
//import axios from 'axios';
import Personal from './Personal';
import Experience from './Experience';
import Qualities from './Qualities'
import Education from './Education';
import Reference from './Reference';
import Interests from './Interests';
import Profile from './Profile'
//import "./css/multistep.css";


export class Multistep extends Component {

    constructor(props){
        super(props);
        //this.onSubmit = this.onSubmit.bind(this);
        //this.onSubmit = this.onSubmit.bind(this)
        this.state={

            step: 1,
            button:false,
            ebutton:false,
            rbutton:false,
            firstname:"Firstname",
            surname:"Surname",
            email:"Email",
            phoneNumber:"Phone Number",
            dob:"Date Of Birth",
            address:"Address",
            
            objective:"Objective",

            experience:[
                    {
                        employer:"Employer",
                        jobTitle:"Job Title",
                        jstartDate:"Start Date",
                        jendDate:"End Date",
                        jobObjective:"Job Objective",    

                    }

            ],
    
            qualities:"Qualities",
    
            interests:"Interests",

            education:[
                {
            
                    fieldOfStudy:"Field Of Study",
                    schoolName:"School Name",
                    startDate:"Start Date",
                    gradDate:"Graduation Date"}
                  

            ],

            reference:[{

                rname:"Referent Name",
                roccupation:"Occupation",
                remployer:"Employer",
                remail:"Email",
                rphone:"Phone Number"

            }],

          temp:""
    
    
        }
    


    }
    
    //Proceed to next step
    nextStep =() =>{

        const {step } = this.state;
        this.setState({

            step: step +1
        });

    }
    /// go to previous step
    prevStep =() =>{
        

        const {step } = this.state;
        this.setState({

            step: step -1

        });

    }

    
    //handle fields change
    handleChange= input => val => e => {

        console.log("Im not here")
       this.setState({[input]: val});

    }

    onChangeTemplate = e => {
      
        this.setState({temp:e.target.value});
       
	  }

    handleArray = input => e =>{

        this.setState({ myArray: [...this.state.myArray, 'new value']})


    }

    addToEducationArray = input => e => {
    
        this.setState({ education: [...this.state.education, input ]})

        if(this.state.education.length>=1){

                this.state.button=true;
        }
        else{
            this.state.button=false;

        }

    }

    popEducationArray = input => e => {
        if (this.state.education.length>1){
            this.state.education.pop();
            this.setState({education: this.state.education})   
        }
        if(this.state.education.length>1){
            this.state.button=true;
        }
        else{
            this.state.button=false;
            }
        }

    addToExperienceArray = input => e =>{
        this.setState({ experience: [...this.state.experience, input ]})

        if(this.state.experience.length>=1){

            this.state.ebutton=true;
    }
    else{
        this.state.ebutton=false;

    }

   // window.scrollBy(0, 400); 
    }

    popToExperienceArray=input=>e=>{
        if(this.state.experience.length>1){
            this.state.experience.pop();
            this.setState({experience:this.state.experience})
        }

        if(this.state.experience.length>1){
            this.state.ebutton=true;
        }
        else{
            this.state.ebutton=false;
            }
    }

    addToReferenceArray = input => e =>{
        this.setState({ reference: [...this.state.reference, input ]})

        if(this.state.reference.length>=1){

            this.state.rbutton=true;
    }
    else{
        this.state.rbutton=false;

    }
       
    }

    popToReferenceArray= input => e =>{
        if(this.state.reference.length>1){
            this.state.reference.pop();
            this.setState({reference:this.state.reference})
        }

        if(this.state.reference.length>1){
            this.state.rbutton=true;
        }
        else{
            this.state.rbutton=false;
            }
    }

    

    



    //retrieve state value
     getStateValue = input => e =>{

            return ("hello World");

     }

     

     /** 
     onSubmit(){

        //e.preventDefault();

        const personal = {
        firstname:this.state.firstname,
        surname: this.state.surname,
        email: this.state.email,      
        phoneNumber: this.state.phoneNumber,
        dob: this.state.dob,
        address: this.state.address
        }

        axios.post('http://localhost:5000/personal/add' , personal)
            .then(res => console.log(res.data))
        
        window.Location = '/';

    }

    */


   

    render() { 
        
        const {step} = this.state;
        const {button,ebutton , rbutton,firstname, surname,email,phoneNumber,dob,address,objective,experience ,employer,jobObjective,jobTitle,jstartDate,jendDate,qualities , interests,fieldOfStudy,startDate,gradDate,schoolName,education,rname,roccupation,remployer,remail,rphone,reference,temp} = this.state;
        const values = {button,ebutton,rbutton,firstname, surname,email,phoneNumber,dob,address,objective,experience ,employer,jobObjective,jobTitle,jstartDate,jendDate,qualities, interests, fieldOfStudy,startDate,gradDate, schoolName,education,rname,roccupation,remployer,remail,rphone,reference,temp};
     
      console.log(values)
        switch(step){

               case 1:
                   return(
                    <Personal
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        value={values}
                        
                    />
                    );
                   
                    

                case 2:
                    return <Profile
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange= {this.handleChange}
                    value={values}
                    
                    
                    />
                case 3:
                    return <Experience
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange= {this.handleChange}
                    addToExperienceArray ={this.addToExperienceArray}
                    popToExperienceArray = {this.popToExperienceArray}
                    value={values}
                    
                    />

                    
                case 4:
                        return <Qualities
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        value={values}
                        
                        />

                case 5:
                        return <Education
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        addToEducationArray = {this.addToEducationArray}
                        popEducationArray = {this.popEducationArray}
                        value={values}
                            
                            
                            />
                 case 6:
                        return <Interests
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        value={values}
                                    
                                    
                                    />
                 case 7:
                        return <Reference
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        addToReferenceArray = {this.addToReferenceArray}
                        popToReferenceArray = {this.popToReferenceArray}
                        value={values}
                        />


                    
        }
    }
}

export default Multistep;
