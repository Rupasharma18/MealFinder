import {users} from "../constants";

const idState={
    MealIdData:[],
    error:null,
    pending:false,

}

export default function MealidReducers(state= idState, action){
    switch (action.type) {
        case users.FETCH_MEAL_BY_ID_SUCCESS:
            return {
                ...state, MealIdData: action.payload,
                pending:false
            }
           case users.FETCH_MEAL_BY_ID_ERROR:
               return {
                   ...state, error:action.payload,
                   pending:false
               } 
            case users.FETCH_MEAL_BY_ID_PENDING:
                return {
                    ...state, pending:true
                }   
        default:
            return state;
    }
}