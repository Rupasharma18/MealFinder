
import {users} from "../constants";

const intialState = {
    area :[],
    error:null,
    pending:false
}

export default function AreaOfList(state=intialState, action) {
    switch (action.type) {
        case users.FETCH_LIST_OF_AREA_PENDING:
            return{
                ...state,pending:true
            }
        case users.FETCH_LIST_OF_AREA_SUCCESS:
            return{
            ...state, area:action.payload,
            pending:false
        }
        case users.FETCH_LIST_OF_AREA_ERROR:
            return{
                ...state, error:action.payload,
                pending:false
            }
        default:
          return state
    }
}