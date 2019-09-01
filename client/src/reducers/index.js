import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import alertsReducer from './alert';

export default combineReducers({
  items: itemsReducer,
  alerts: alertsReducer
});
