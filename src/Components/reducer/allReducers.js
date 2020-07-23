import {personalReducer} from './personal' 
import {profileReducer} from './profile'
import {stepReducer} from './step'
import {combineReducers} from 'redux'
import {experienceReducer} from "./experience"

 export const allReducers  = combineReducers({
    profiler : profileReducer,
    personer : personalReducer,
    steper : stepReducer,
    experiences:experienceReducer
})