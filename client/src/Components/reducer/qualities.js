const initialState = {

    qualities: `Results driven individual with four years experience desiring to
     bring engineering and telecommunicationexperience to a software engineering 
     position at ABC Company. Searching for the oppotunirt to bring 8+years experience ,
      and server maintenance to a software engineer position with ABC Company incorporating
    critical thinking, problem solving and leadership`

}

export default function qualitiesReducer(state= initialState , action){
    switch(action.type){
        case "CHANGE_QUALITIES":
            return {...state , qualities:action.payload}
        default:
            return state
    }

}