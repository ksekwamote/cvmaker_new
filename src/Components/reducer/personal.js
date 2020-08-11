const initialState ={
    firstname:"Sam ",
    surname:"Peterson",
    email:"peterson2020@fakeemail.com",
    phoneNumber:"+11 230 909 8298",
    dob:"Date Of Birth",
    address:"30 Rockefeller Plaza, NewYork, NY",

    hobbies : "",
    
}

export function personalReducer(state=initialState, action){
        switch(action.type){
            case "CHANGE_FIRSTNAME":
                return {...state , firstname:action.payload}
            case "CHANGE_SURNAME":
                return {...state , surname:action.payload}
            case "CHANGE_EMAIL":
                return {...state , email:action.payload}
            case "CHANGE_PHONE_NUMBER":
                return {...state , phoneNumber:action.payload}
            case "CHANGE_DATE_OF_BIRTH":
                return {...state , dob:action.payload}
            case "CHANGE_ADDRESS":
                return {...state , address:action.payload}
            case "ADD_HOBBIES":
                return {...state , hobbies:action.payload}
            default:
                return state 
        }
}
