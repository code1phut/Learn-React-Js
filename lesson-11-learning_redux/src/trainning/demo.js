import { createStore } from 'redux';
import { status, sort } from './action/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);
console.log("default: ", store.getState());
//Thuc hien cong viec change status

// var action = {type: 'TOGGLE_STATUS'};
store.dispatch(status());
console.log("TOGGLE_STATUS: ", store.getState());

// thuc hien cong viec name tu Z-A
store.dispatch(sort({
    by: 'name',
    value: -1,
}));
console.log("actionSort: ", store.getState());

