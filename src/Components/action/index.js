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



export const changeProfile =(profile) =>{
    return {
        type:"CHANGE_PROFILE",
        payload: profile
    }
}

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