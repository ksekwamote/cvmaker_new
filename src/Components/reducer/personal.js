const firstnameReducer = (state ="" , action) => {
        switch(action.type){
               case "firstname":
                   return action.payload
                default:
                    return state 

        }

}