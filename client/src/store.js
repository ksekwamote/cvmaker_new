import {createStore} from 'redux'
import {personalReducer} from './Components/reducer/personal'
import {allReducers} from "./Components/reducer/allReducers"

const store  = createStore(allReducers ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
export default store;