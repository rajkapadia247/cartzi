import totalItems from "./totalItems";
import view from "./view";
import cartDetails from "./cartDetails";
import { combineReducers } from 'redux';
import userDetails from "./userDetails";


const rootReducer = combineReducers({
    totalItemsNum: totalItems,
    isGridView: view,
    cartDetails: cartDetails,
    userDetails: userDetails
});

export default rootReducer;