

export default function templateReducer(state= "template6" , action){
    switch(action.type){
        case "CHANGE_TEMPLATE":
            return action.payload
        default:
            return state
    }

}