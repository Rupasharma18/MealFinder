import {users} from "../constants";

let user = {"email":"rupa@123gmail.com", "password": "rupa"}
const initialState = user ? { loggedIn: true, user } : {};
export default function usersLogin(state = initialState , action){
switch(action.type){
    case users.LOGIN_SUCCESS:
        return{
            loggedIn :true,
            user : action.payload
        }
    case users.LOGIN_FAILURE:
        return {   loggedIn :false,
        error:action.payload
        };
    case users.LOGOUT:
        return { loggedIn :false};
    default:
        return state
    }
}
