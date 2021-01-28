import {users} from "../constants";
import {history} from '../helper';
import axios from "axios";

export const userActions = {
    login,
    logout,
    CallApI,
    FilterIngredient,
    AreaList,
    CategoryList,
    IngerditeList,
    LetterApi,
    MealId,
    Ingreditent

};

// Login 
function login(email, password) {
    var data = {"email":"rupa@123gmail.com", "password": "rupa"}
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

function success(user) { return { type: users.LOGIN_SUCCESS, payload: user } }
function failure(error) { return { type: users.LOGIN_FAILURE, payload: error } }
    
}
// logout
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
        payload: mealData,
    }
    
}
function errorMealData(error) {
    return {
        type:users.FETCH_MEAL_ERROR_BY_NAME,
        payload:  error
    }
    }

function NotFound(){
    return{
        type: users.FETCH_MEAL_NOTFOUND,
    }
}    
    
}


// show dropdown
// area

function AreaList() {
    const api = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    return dispatch=>{
        dispatch(pending())
        axios.get(api)
        .then(res=>{
            dispatch(succesArea(res.data))
        })
        .catch(err=>{
            dispatch(error(err))
        })
    }
    function succesArea(data) {
        return {
            type:users.FETCH_LIST_OF_AREA_SUCCESS,
            payload:data
        }
    }
    function pending() {
        return {
            type:users.FETCH_LIST_OF_AREA_PENDING,
            
        }
    }
    function error(err) {
    return {
        type:users.FETCH_LIST_OF_AREA_ERROR,
        payload:err,
    }
}
    
}

// catagory
function CategoryList() {
    const api = `https://www.themealdb.com/api/json/v1/1/list.php?c=list`

    return dispatch=>{
        dispatch(pending())
        axios.get(api)
        .then(res=>{
            dispatch(success(res.data))
        })
        .catch(err=>{
            dispatch(error(err))
        })
    }
    function success(data) {
        return {
            type:users.FETCH_LIST_OF_CATEGORY_SUCCESS,
            payload:data
        }
    }
    function pending() {
        return {
            type:users.FETCH_LIST_OF_CATEGORY_PENDING,
            
        }
    }
    function error(err) {
    return {
        type:users.FETCH_LIST_OF_CATEGORY_ERROR,
        payload:err,
    }
}
    
}

// ingerditent
function IngerditeList() {
    const api = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`

    return dispatch=>{
        dispatch(pending())
        axios.get(api)
        .then(res=>{
            dispatch(success(res.data))
        })
        .catch(err=>{
            dispatch(error(err))
        })
    }
    function success(data) {
        return {
            type:users.FETCH_LIST_OF_INGRENDIENT_SUCCESS,
            payload:data
        }
    }
    function pending() {
        return {
            type:users.FETCH_LIST_OF_INGRENDIENT_PENDING,
            
        }
    }
    function error(err) {
    return {
        type:users.FETCH_LIST_OF_INGRENDIENT_ERROR,
        payload:err,
    }
}
    
}






// filter  meal api

function FilterIngredient(category, ingredient, area) {

    const api = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}&i=${ingredient}&a=${area}`;
    const apicategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const apiIngredient = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const apiArea =  `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
    if(!!category && !!ingredient && !!area && area !== "" && ingredient !=="" && category !== ""){
        return dispatch=>{
            dispatch(pending())
            axios.get(api)
            .then(res=>{

                dispatch(succesIngredient(res.data))
            })
            .catch(err=>{
                dispatch(errorIngre(err))
            })
    
        }
    }
   else if(!!category && category !==""){
        return dispatch=>{
            dispatch(pending())
            axios.get(apicategory)
            .then(res=>{
                dispatch(succesIngredient(res.data))
            })
            .catch(err=>{
                dispatch(errorIngre(err))
            })
    
        }
    }

  else if(!!ingredient && ingredient !== ""){
        return dispatch=>{
            dispatch(pending())
            axios.get(apiIngredient)
            .then(res=>{
                dispatch(succesIngredient(res.data))
            })
            .catch(err=>{
                dispatch(errorIngre(err))
            })
    
        }
    
    }else if(!!area && area !== ""){
        return dispatch=>{
            dispatch(pending())
            axios.get(apiArea)
            .then(res=>{
                dispatch(succesIngredient(res.data))
            })
            .catch(err=>{
                dispatch(errorIngre(err))
            })
    
        }
    }


function succesIngredient(resData) {
    debugger
    console.log(resData,"resData")
    return {
        type: users.FETCH_MEAL_BY_INGREDIENT_SUCCESS,
        payload : resData
    }
}
function pending() {
    return {
        type:users.FETCH_MEAL_BY_INGREDIENT_PEANDING,
        payload:{pending:true}
    }
    
}

function errorIngre(err) {
  return{
      type:users.FETCH_MEAL_BY_INGREDIENT_ERROR,
      payload:err
  }  
}
}




// letter api
function LetterApi(letter) {

    console.log(letter, "apiletttttttttttttttttttttt")

    const api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    return dispatch =>{
        dispatch(pending())
        axios.get(api)
        .then(res =>{
            console.log(res, "sesfdsgdd")
            dispatch(succesS(res.data))
            history.push("/alphaComponent")
        })
        .catch(err=>{
            console.log(err)
            dispatch(errors(err))
        })
    }



    function succesS(leData) {
        return {
            type: users.FETCH_LIST_OF_LETTER_SUCCESS,
            payload : leData
        }
    }
    function pending() {
        return {
            type:users.FETCH_LIST_OF_LETTER_PENDING,
            payload:{pending:true}
        }
        
    }
    
    function errors(err) {
      return{
          type:users.FETCH_LIST_OF_LETTER_ERROR,
          payload:err
      }  
    }

}


// meal details by id

function MealId(id) {
    const api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    return dispatch =>{
        dispatch(pendingID())
        axios.get(api)
        .then(res =>{
            dispatch(succesId(res.data))
            history.push("/mealDetails")
          
        })
        .catch(err=>{
            dispatch(error(err))
        })
    }
    
    function succesId(dataid) {
        return {
            type:users.FETCH_MEAL_BY_ID_SUCCESS,
            payload:dataid
        }
        
    }
    function pendingID() {
        return {
            type:users.FETCH_MEAL_BY_ID_PENDING,
        }
    }
    function error(error) {
        return {
            type:users.FETCH_MEAL_BY_ID_ERROR,
            payload:error
        }
    }
}




// ingreditents by food items
function Ingreditent(name , imageUrl) {
    debugger
    const apiIngredientName = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`;
    return dispatch=>{
        dispatch(pending())
        axios.get(apiIngredientName)
        .then(res=>{
            dispatch(success(res.data, imageUrl, name))
            history.push('/IngerdientPage')
        })
        .catch(err=>{
            dispatch(error(err))
        })
    
    }
  
    function success(data, imageUrl) {
        return {
            type:users.FETCH_MEAL_BY_INGERDIENT_SUCCESS,
            payload:[data, imageUrl, name]
        }
        
    }

    function error(err) {
        return {
            type:users.FETCH_MEAL_BY_INGERDIENT_ERROR,
            payload:err
        }
        
    }

    function pending() {
        return {
            type:users.FETCH_MEAL_BY_INGERDIENT_PENDING,
         
        }
        
    }
}









// // Filter by Category meal api
// function Category(category,area) {
//     const cAPi =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}&a=${area}&i=${}`

//     return dispatch =>{
//         dispatch(pendingCate())
//         axios.get(cAPi).then(res=>{
//             dispatch(succesCate(res.data))

//         })
//         .catch(err=>{
//             dispatch(errorCate(err))
//         })
//     }
 
//     function succesCate(resDataC) {
//         return {
//             type: users.FETCH_MEAL_BY_CATEGORY_SUCCESS,
//             payload : resDataC
//         }
//     }
//     function pendingCate() {
//         return {
//             type:users.FETCH_MEAL_BY_CATEGORY_PEANDING,
//             payload:{pending:true}
//         }
        
//     }
    
//     function errorCate(errC) {
//       return{
//           type:users.FETCH_MEAL_BY_CATEGORY_ERROR,
//           payload:errC
//       }  
//     }
// }

// // filter by area meal api

// function Area(area) {
//     const AreaApi = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    
// return dispatch =>{
//     dispatch(pendingArea())

//     axios.get(AreaApi)
//     .then(respone=>{

//         dispatch(successArea(respone.data))
//     })
//     .catch(err=>{
//         dispatch(errorArea(err))
//     })
// }


// function successArea(area) {
//     return {
//         type:users.FETCH_MEAL_BY_AREA_SUCCESS, 
//         payload: area
//     }
    
// }

// function errorArea(err) {
//     return {
//         type:users.FETCH_MEAL_BY_AREA_ERROR,
//         payload:err
//     }
// }

// function pendingArea() {
//     return {type:users.FETCH_MEAL_BY_AREA_PENDING,
//         payload:{pending:true}
//     }
// }

// }