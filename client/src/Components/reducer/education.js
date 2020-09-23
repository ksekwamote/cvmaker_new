const initialState = {
    values:{
        education:
        [
             {
                fieldOfStudy:"",
                schoolName:"",
                startDate:"",
                gradDate:""

             }


        ]

    }
}


export function educatonReducer(state = initialState , action){
    switch(action.type){
        case "CHANGE_FIELD_OF_STUDY":
            [...state.values.education , state.values.education[action.index].fieldOfStudy=action.payload].pop()
            return state
        case "CHANGE_SCHOOL_NAME":
            [...state.values.education , state.values.education[action.index].schoolName=action.payload].pop()
            return state
        case "CHANGE_START_DATE":
            [...state.values.education , state.values.education[action.index].startDate=action.payload].pop()
            return state
        case "CHANGE_GRAD_DATE":
            [...state.values.education , state.values.education[action.index].gradDate=action.payload].pop()
            return state
        case "ADD_EDUCATION":
            return {
                ...state,
                values: {
                  ...state.values,
                  education: [...state.values.education, {
                    fieldOfStudy:"",
                    schoolName:"",
                    startDate:"",
                    gradDate:""
                 } 
                    ]
                }
              }
        case "REM_EDUCATION":
            if (state.values.education.length <= 1) {
                return state
              }
              return {
                ...state,
                values: {
                  ...state.values,
                  education: state.values.education.slice(0, -1)
                }
              }
        default:
            return state
    }
}