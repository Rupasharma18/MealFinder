import { combineReducers } from 'redux';
import usersLogin from './usersReducer';
import ApiData from "./mealApiDataReducer";

const rootReducer = combineReducers({
    usersLogin,
    ApiData
});

export default rootReducer;