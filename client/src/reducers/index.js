import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import alertsReducer from './alertReducer';
import authReducer from './authReducer';

export default combineReducers({
  items: itemsReducer,
  alerts: alertsReducer,
  auth: authReducer
});
