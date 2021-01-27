import {users} from "../constants";

const intitalState= {
    category:[],
    error:null,
    pending:false
}

export default function listOfCategory(state = intitalState, action) {
    switch (action.type) {
        case users.FETCH_LIST_OF_CATEGORY_PENDING:
            return{
                ...state, pending:true
            }
            
        case users.FETCH_LIST_OF_CATEGORY_SUCCESS:
            return {
                ...state, category:action.payload,
                pending:false
            }
        case users.FETCH_LIST_OF_CATEGORY_ERROR:
            return {
                ...state, error:action.payload,
                pending:false
            }
        default:
            return state;
    }
}