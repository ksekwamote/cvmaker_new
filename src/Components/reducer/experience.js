const initalState = 
        {
            employer:"",
            jobTitle: "",
            jstartDate: "",
            jendDate: "",
            jobObjective: ""
    }



export function experienceReducer(state=initalState, action){

    switch(action.type){
        case "CHANGE_EMPLOYER":
            return {...state , employer: action.payload }

        case "CHANGE_JOB":
            return {...state , jobTitle: action.payload}

        case "CHANGE_JOB_STARTDATE":
            return {...state , jstartDate: action.payload}

        case "CHANGE_JOB_ENDDATE":
            return {...state , jendDate: action.payload}

        case "CHANGE_JOB_DESCRIPTION":
            return {...state , jobObjectives:action.payload }
        
        default:
            return state

    }


}