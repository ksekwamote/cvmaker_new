const initialState = {
    qualities: ""
}

export default function qualitiesReducer(state= initialState , action){
    switch(action.type){
        case "CHANGE_QUALITIES":
            return {...state , qualities:action.payload}
        default:
            return state
    }

}