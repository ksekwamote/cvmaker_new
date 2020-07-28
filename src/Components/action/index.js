//STEPS
export const nextStep = () =>{
    
    return{

        type:"NEXT_STEP"
    }

}

export const prevStep = () =>{
    
    return{

        type:"PREV_STEP"
    }

}

//PERSONAL INFORMATION
export const changeFirstname = (firstname) => {
    return{   
        type:"CHANGE_FIRSTNAME",
        payload:firstname

    };
}

export const changeSurname = (surname) => {
    return{   
        type:"CHANGE_SURNAME",
        payload:surname

    };
}

export const changeEmail = (email) => {
    return{   
        type:"CHANGE_EMAIL",
        payload:email

    };
}

export const changePhoneNumber = (phoneNumber) => {
    return{   
        type:"CHANGE_PHONE_NUMBER",
        payload:phoneNumber

    };
}

export const changeDateOfBirth= (dob) => {
    return{   
        type:"CHANGE_DATE_OF_BIRTH",
        payload:dob

    };
}

export const changeAddress = (address) => {
    return{   
        type:"CHANGE_ADDRESS",
        payload:address

    };
}

export const changeHobbies = (hobbies) => {
    return {
        type: "ADD_HOBBIES",
        payload: hobbies
    }
}


//PROFILE 
export const changeProfile =(profile) =>{
    return {
        type:"CHANGE_PROFILE",
        payload: profile
    }
}


//WORK EXPERIENCE

export const changeEmployer = (employer ,num) => {
    return {
        type:"CHANGE_EMPLOYER",
        payload:employer,
        index:num

    }
}

export const changeJob = (job_title ,num) => {
    return {
        type:"CHANGE_JOB",
        payload: job_title,
        index:num

    }
}

export const changeJobStartDate = (jobStartDate ,num) => {
    return {
        type:"CHANGE_JOB_STARTDATE",
        payload: jobStartDate,
        index:num

    }
}

export const changeJobEndDate = (jobEndDate ,num) => {
    return {
        type:"CHANGE_JOB_ENDDATE",
        payload: jobEndDate,
        index:num

    }
}



export const changeJobDescription = (jobDescription ,num) => {
    return {
        type:"CHANGE_JOB_DESCRIPTION",
        payload: jobDescription,
        index:num

    }
}


export const addExperience =() =>{

    return {
        type: "ADD_EXPERIENCE"
    }

}

export const remExperience =() =>{

    return {
        type: "REMOVE_EXPERIENCE"
    }

}
export const addNumber = () => {
    return{
        type: "ADD_NUMBER"
    }
}


//QUALITIES 
export const changeQualities = (qualities) =>{
    return{
        type:"CHANGE_QUALITIES",
        payload: qualities
    }

}

//EDUCATION  
export const changeFieldOfStudy =(fos , num) =>{
    return {
        type: "CHANGE_FIELD_OF_STUDY",
        payload: fos,
        index: num    
    }

}

export const changeSchoolName =(input , num) =>{
    return {
        type: "CHANGE_SCHOOL_NAME",
        payload: input,
        index: num
    }

}

export const changeStartDate =(input , num) =>{
    return {
        type: "CHANGE_START_DATE",
        payload: input,
        index: num
    }

}

export const changeGradDate =(input , num) =>{
    return {
        type: "CHANGE_GRAD_DATE",
        payload: input,
        index: num
    }

}

export const addEducation =() =>{
    return{
        type:"ADD_EDUCATION"
    }
}

export const remEducation = () =>{
    return{
        type: "REM_EDUCATION"
    }
}

//REFERENCE 

export const changeReferentName = (text , index) =>{
    return {
        type:"ADD_REFERENT_NAME",
        payload: text,
        index: index
    }
}

export const changeOccupation = (text , index) =>{
    return {
        type:"ADD_OCCUPATION",
        payload: text,
        index: index
    }
}

export const changeCompany = (text , index) =>{
    return {
        type:"ADD_COMPANY",
        payload: text,
        index: index
    }
}

export const changeRPhoneNumber = (text , index) =>{
    return {
        type:"ADD_RPHONE_NUMBER",
        payload: text,
        index: index
    }
}

export const changeRemail = (text , index) =>{
    return {
        type:"ADD_REMAIL",
        payload: text,
        index: index
    }
}



export const addReference =()=>{
    return {
        type:"ADD_REFERENCE"
    }
}
export const remReference =()=>{
    return {
        type:"REM_REFERENCE"
    }
}



