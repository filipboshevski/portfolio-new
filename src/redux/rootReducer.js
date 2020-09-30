import projectReducer from "./projects/projectReducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    projects: projectReducer
});

export default rootReducer;