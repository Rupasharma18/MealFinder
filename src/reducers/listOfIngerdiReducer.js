import {users} from "../constants";

const intitalState= {
    Ingredients:[],
    error:null,
    pending:false
}

export default function listOfIngredients(state = intitalState, action) {
    switch (action.type) {
        case users.FETCH_LIST_OF_INGRENDIENT_PENDING:
            return{
                ...state, pending:true
            }
            
        case users.FETCH_LIST_OF_INGRENDIENT_SUCCESS:
            return {
                ...state, Ingredients:action.payload, pending:false
            }
        case users.FETCH_LIST_OF_INGRENDIENT_ERROR:
            return {
                ...state, error:action.payload,
                pending:false
            }
        default:
            return state;
    }
}