

const initialState ={


    profile : ""


}

export function profileReducer(state=initialState, action){
        switch(action.type){
            case "CHANGE_PROFILE":
                return { ...state , profile:action.payload}
            default:
                return state
        }

}