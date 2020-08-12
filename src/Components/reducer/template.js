

export default function templateReducer(state= "template1" , action){
    switch(action.type){
        case "CHANGE_TEMPLATE":
            return action.payload
        default:
            return state
    }

}