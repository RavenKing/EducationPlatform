import {combineReducers} from 'redux';
import Agency from './Agency';
import Auth from './Auth'
const rootReducer = combineReducers({
  Agency,
  Auth
});

export default rootReducer;