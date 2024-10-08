import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore } from 'redux'
import searchReducer from '../reducers/searchReducer';
import recipeFetchDataReducer from '../reducers/recipeReducer';

//creating rootReducer by combining all the created reducers
const rootReducer = combineReducers({
    search: searchReducer,
    recipes: recipeFetchDataReducer
});

//creating store object using rootReducer and composeWithDevTools
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;