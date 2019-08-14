import _ from 'lodash';

import {
  CREATE_ITEM,
  GET_ITEMS,
  GET_ITEM_BY_MONTH,
  REMOVE_ITEM
} from '../actions/types';

const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, ..._.mapKeys(action.payload, '_id') };
    case CREATE_ITEM:
      return { ...state, [action.payload._id]: action.payload };
    case REMOVE_ITEM:
      console.log(action.payload_id);
      return _.omit(state, action.payload._id);
    default:
      return state;
  }
};

export default itemsReducer;
