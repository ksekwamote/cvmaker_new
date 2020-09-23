

export default function templateReducer(state= "template1" , action){
    switch(action.type){
        case "CHANGE_TEMPLATE":
            console.log("reduce "+action.payload)
            return action.payload
        default:
            return state
    }

}