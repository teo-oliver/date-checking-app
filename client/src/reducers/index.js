import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import alertsReducer from './alertReducer';

export default combineReducers({
  items: itemsReducer,
  alerts: alertsReducer
});
