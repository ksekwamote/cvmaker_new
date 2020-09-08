

const initialState ={


    profile : `This is a free application but is very expensive to maintain. 
    We feel it was important to create this platform to help and assist 
    those who are unable to do Resumes for themselves. 
    To support this endavour by AFRICAN DEVELOPERS.
     You can DONATE via PAYPAL or SHARE our webiste on your social 
     media.`


}

export function profileReducer(state=initialState, action){
        switch(action.type){
            case "CHANGE_PROFILE":
                return { ...state , profile:action.payload}
            default:
                return state
        }

}