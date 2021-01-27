import {users} from "../constants";

const ingState = {
    ingredientState :[],
    error:null,
    pending:false
}

export default function IngredientReducer(state=ingState , action){
    switch (action.type) {
        case users.FETCH_MEAL_BY_INGREDIENT_PEANDING:
            return{
                ...state, pending:action.payload
            }
        case users.FETCH_MEAL_BY_INGREDIENT_SUCCESS:
            return{
                ...state, ingredientState:action.payload
            }
        case users.FETCH_MEAL_BY_INGREDIENT_ERROR:
            return{
                ...state, error:action.payload
            }    
        default:
          return  state;
    }
}