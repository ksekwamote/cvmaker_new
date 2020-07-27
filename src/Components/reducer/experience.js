/**const initialState =
{
    number:0,
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

} **/

const initialState = {
    number:0 ,    
    values:{
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

}





export function experienceReducer(state=initialState, action){
        console.log("Action.index: "+ action.index)
    switch(action.type){
        case "CHANGE_EMPLOYER":{
            
            [...state.values.work , state.values.work[action.index].employer=action.payload].pop()
            return state
        }
        case "CHANGE_JOB":
            [...state.values.work , state.values.work[action.index].position=action.payload].pop()
            return state

        case "CHANGE_JOB_STARTDATE":
            [...state.values.work , state.values.work[action.index].jstartDate=action.payload].pop()
            return state

        case "CHANGE_JOB_ENDDATE":
            [...state.values.work , state.values.work[action.index].jendDate=action.payload].pop()
            return state

        case "CHANGE_JOB_DESCRIPTION":
            [...state.values.work , state.values.work[action.index].jdescription=action.payload].pop()
            return state
        case "ADD_EXPERIENCE":
           return {
            ...state,
            values: {
              ...state.values,
              work: [...state.values.work, {}]
            }
          }
        case "REMOVE_EXPERIENCE":
          if (state.values.work.length <= 1) {
                return state
              }
        
              return {
                ...state,
                values: {
                  ...state.values,
                  work: state.values.work.slice(0, -1)
                }
              }
        case "ADD_NUMBER":
            return {...state , number: state.number+1}
        default:
            return state

    }


}