const initialState ={
    values:{

        refree:[
            {
            referent:"Kutlo Sek",
            occupation:"Senior Developer",
            company: "Google Inc",
            email:"kutlosek@fakeemail.com",
            phone:" +11 4347 8989 84"
            }
        ]
    }

}

export function referenceReducer(state= initialState , action){
    switch(action.type){
        case "ADD_REFERENT_NAME":
            [...state.values.refree , state.values.refree[action.index].referent=action.payload].pop()
            return state
        case "ADD_OCCUPATION":
            [...state.values.refree , state.values.refree[action.index].occupation=action.payload].pop()
            return state
        case "ADD_COMPANY":
            [...state.values.refree , state.values.refree[action.index].company=action.payload].pop()
            return state
        case "ADD_RPHONE_NUMBER":
            [...state.values.refree , state.values.refree[action.index].phone=action.payload].pop()
            return state
        case "ADD_REMAIL":
            [...state.values.refree , state.values.refree[action.index].email=action.payload].pop()
            return state
        case "ADD_REFERENCE":
            return {
                ...state,
                values: {
                  ...state.values,
                  refree: [...state.values.refree, {
                    referent:"",
                    occupation:"",
                    company: "",
                    email:"",
                    phone:""
                }
                    ]
                }
              } 
        case "REM_REFERENCE":
            if (state.values.refree.length <= 1) {
                return state
              }
              return {
                ...state,
                values: {
                  ...state.values,
                  refree: state.values.refree.slice(0, -1)
                }
              }
        default:
            return state

        
    }

}