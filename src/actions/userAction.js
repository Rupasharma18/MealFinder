import {users} from "../constants";
import {history} from '../helper';
import axios from "axios";

export const userActions = {
    login,
    logout,
    CallApI,
    // RandomMeal,
};

// Login 
function login(email, password) {
    var data = {"email":"rupa@123gmail.com", "password": "rupa"}
    console.log(data.email)
    // debugger
    return dispatch => {
     if(data.email === email && data.password === password){
        dispatch(success(data));
        history.push('/home');
     }
     else{
        const error = "input is not valid."
        dispatch(failure(error));
        history.push('/login');
     }

      
    };

function success(user) { return { type: users.LOGIN_SUCCESS, user } }
function failure(error) { return { type: users.LOGIN_FAILURE, error } }
    
}

function logout() {
history.push("/login")
return { type: users.LOGOUT };
     
}

// Meal API CALLING
function CallApI (mealName){
    return dispatch =>{
        dispatch(paddingData())
        const api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
        axios.get(api).then(res=>{
            console.log(res.data.meals, "resp++++++++")
            if(res.data.meals !== null){
                dispatch(SuccessMeal(res.data.meals)) 
            }
            else{
                dispatch(NotFound())
            }
        })
        .catch(err=>{
            dispatch(errorMealData(err))
        })
    }

function paddingData() {
    return {
        type:users.FETCH_MEAL_PENDING_BY_NAME, 
    }
}

function SuccessMeal(mealData) {
    return {
        type: users.FETCH_MEAL_SUCCESS_BY_NAME ,
        mealData,
    }
    
}
function errorMealData(error) {
    return {
        type:users.FETCH_MEAL_ERROR_BY_NAME,
        error
    }
    }

function NotFound(){
    return{
        type: users.FETCH_MEAL_NOTFOUND,

    }
}    
    
}


// random meal

// function RandomMeal() {
//     const randomApi = "https://www.themealdb.com/api/json/v1/1/random.php";
//     axios.get(randomApi).then(res=>{
//         console.log(res,"+++++++++++++++++++")
//     })
//     .catch(err=>{
//         console.log(err, "error")
//     })
// }
