import { combineReducers } from 'redux';
import authReducer from './account/authReducer';

const rootReducer = combineReducers({ 
    auth: authReducer
})

export default rootReducer;