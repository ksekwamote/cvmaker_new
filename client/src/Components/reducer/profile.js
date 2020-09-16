

const initialState ={


    profile : `Results driven individual with four years experience desiring to
     bring engineering and telecommunicationexperience to a software engineering
      position at ABC Company. Searching for the oppotunirt to bring 8+years experience ,
       and server maintenance to a software engineer 
    position with ABC Company incorporatingcritical thinking, problem solving and leadership`


}

export function profileReducer(state=initialState, action){
        switch(action.type){
            case "CHANGE_PROFILE":
                return { ...state , profile:action.payload}
            default:
                return state
        }

}