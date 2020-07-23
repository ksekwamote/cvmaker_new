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


//PROFILE 
export const changeProfile =(profile) =>{
    return {
        type:"CHANGE_PROFILE",
        payload: profile
    }
}


//WORK EXPERIENCE

export const changeEmployer = (employer) => {
    return {
        type:"CHANGE_EMPLOYER",
        payload:employer

    }
}

export const changeJob = (job_title) => {
    return {
        type:"CHANGE_JOB",
        payload: job_title

    }
}

export const changeJobStartDate = (jobStartDate) => {
    return {
        type:"CHANGE_JOB_STARTDATE",
        payload: jobStartDate

    }
}

export const changeJobEndDate = (jobEndDate) => {
    return {
        type:"CHANGE_JOB_ENDDATE",
        payload: jobEndDate

    }
}



export const changeJobDescription = (jobDescription) => {
    return {
        type:"CHANGE_JOB_DESCRIPTION",
        payload: jobDescription

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