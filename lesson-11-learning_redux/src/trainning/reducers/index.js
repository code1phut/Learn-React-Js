import status from './status'; //Reducer status
import sort from './sort'; // Reducer sort;
import  { combineReducers } from "redux";

const myReducer = combineReducers({
    status,
    sort,
});

export default myReducer;