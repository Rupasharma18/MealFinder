import {users} from "../constants";

// Meal data
const Apistate = {
    pending: false,
    meal: [],
    error: null,
    NotFound:false
}
export default function ApiData(state = Apistate, action) {
    switch (action.type) {
        case users.FETCH_MEAL_PENDING_BY_NAME:
            return {...state, pending: true}
        case users.FETCH_MEAL_SUCCESS_BY_NAME:
            return {...state, meal: action.mealData, pending:false}  
        case users.FETCH_MEAL_ERROR_BY_NAME:
            return {...state, error:action.error, pending:false}
        case users.FETCH_MEAL_NOTFOUND:
            return{...state, NotFound: true}    
        default:
            return state;
    }
}