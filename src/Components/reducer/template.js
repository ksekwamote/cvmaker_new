const initialState = {
    template: "template1"
}

export default function qualitiesReducer(state= initialState , action){
    switch(action.type){
        case "CHANGE_TEMPLATE":
            return {...state , template:action.payload}
        default:
            return state
    }

}