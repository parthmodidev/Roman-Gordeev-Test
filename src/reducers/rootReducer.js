import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import userReducer from './userReducer'
import settingReducer from "./settingReducer";

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  setting: settingReducer,
});

export default rootReducer

// the key name will be the data property on the state object