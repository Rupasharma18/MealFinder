import {users} from "../constants";

const initialState = {
    letterData:[],
    error:null,
    pending:false
}

export default function letterState(state=initialState, action) {
    switch (action.type) {
        case users.FETCH_LIST_OF_LETTER_PENDING:
            return{
                ...state, pending:action.payload.pending
            }
        case users.FETCH_LIST_OF_LETTER_SUCCESS:
            return{
                ...state, letterData:action.payload, pending:false
            } 
        case users.FETCH_LIST_OF_LETTER_ERROR:
            return {
                ...state, error:action.payload, pending:false
            }
        default:
          return  state

    }
}