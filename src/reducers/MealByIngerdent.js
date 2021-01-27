import {users} from "../constants";

const ingState = {
    ingredientNameState :[],
    error:null,
    pending:false
}

export default function IngredientNameReducer(state=ingState , action){
    switch (action.type) {
        case users.FETCH_MEAL_BY_INGERDIENT_PENDING:
            return{
                ...state, pending:true
            }
        case users.FETCH_MEAL_BY_INGERDIENT_SUCCESS:
            return{
                ...state, ingredientNameState:action.payload, pending:false
            }
        case users.FETCH_MEAL_BY_INGERDIENT_ERROR:
            return{
                ...state, error:action.payload, pending:false
            }    
        default:
          return  state;
    }
}