import {personalReducer} from './personal' 
import {profileReducer} from './profile'
import {stepReducer} from './step'
import {combineReducers} from 'redux'
import {experienceReducer} from "./experience"
import qualitiesReducer from './qualities'
import {educatonReducer} from "./education"
import {referenceReducer} from "./reference"
import templateReducer from "./template"

 export const allReducers  = combineReducers({
    profiler : profileReducer,
    personer : personalReducer,
    steper : stepReducer,
    experiences: experienceReducer,
    quality: qualitiesReducer,
    education:educatonReducer,
    reference : referenceReducer,
    templates: templateReducer
})