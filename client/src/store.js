import {createStore} from 'redux'
import {personalReducer} from './Components/reducer/personal'
import {allReducers} from "./Components/reducer/allReducers"

const store  = createStore(allReducers)
    
export default store;