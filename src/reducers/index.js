import { combineReducers } from 'redux';
import usersLogin from './usersReducer';
import ApiData from "./mealApiDataReducer";
import IngredientReducer from "./ingredient";
import AreaOfList from "./listOfArea";
import listOfCategory  from "./listOfCategery";
import listOfIngredients from "./listOfIngerdiReducer";
import letterState from "./letterReducers";
import MealidReducers from "./MealIDreduces";
import IngredientNameReducer from "./MealByIngerdent";
const rootReducer = combineReducers({
    usersLogin,
    ApiData,
    IngredientReducer,
    AreaOfList,
    listOfCategory,
    listOfIngredients,
    letterState,
    MealidReducers,
    IngredientNameReducer
});

export default rootReducer;