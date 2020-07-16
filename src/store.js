import {createStore} from 'redux'
import {personalReducer} from './Components/reducer/personal'


const store  = createStore(personalReducer ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
console.log(store.getState())

export default store;