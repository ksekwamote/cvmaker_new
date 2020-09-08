const initialState = {

    qualities: `This is a free application but is very expensive to maintain. 
    We feel it was important to create this platform to help and assist 
    those who are unable to do Resumes for themselves. 
    To support this endavour by AFRICAN DEVELOPERS.
     You can DONATE via PAYPAL or SHARE our webiste on your social 
     media.`

}

export default function qualitiesReducer(state= initialState , action){
    switch(action.type){
        case "CHANGE_QUALITIES":
            return {...state , qualities:action.payload}
        default:
            return state
    }

}