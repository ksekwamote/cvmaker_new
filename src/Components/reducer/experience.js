const initialState =
{
    work: 
    [
        {
            employer:"",
            position:"",
            jstartDate:"",
            jendDate:"",
            jdescription:""

        }



    ]

}




export function experienceReducer(state=initialState, action){

    switch(action.type){
        case "CHANGE_EMPLOYER":{
            
            [...initialState.work , initialState.work[action.index].employer=action.payload].pop()
            return initialState
        }
        case "CHANGE_JOB":
            [...initialState.work , initialState.work[action.index].position=action.payload].pop()
            return initialState

        case "CHANGE_JOB_STARTDATE":
            [...initialState.work , initialState.work[action.index].jstartDate=action.payload].pop()
            return initialState

        case "CHANGE_JOB_ENDDATE":
            [...initialState.work , initialState.work[action.index].jendDate=action.payload].pop()
            return initialState

        case "CHANGE_JOB_DESCRIPTION":
            [...initialState.work , initialState.work[action.index].jdescription=action.payload].pop()
            return initialState
        
        default:
            return state

    }


}