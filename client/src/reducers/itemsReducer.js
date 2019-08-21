import _ from 'lodash';

import {
  CREATE_ITEM,
  GET_ITEMS,
  GET_ITEM_BY_MONTH,
  REMOVE_ITEM,
  REDUCE_ITEM_BY_50,
  REDUCE_ITEM_BY_90
} from '../actions/types';

const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    //sorte items by date
    case GET_ITEMS:
      return { ...state, ..._.mapKeys(action.payload, '_id') };
    case GET_ITEM_BY_MONTH:
      return { ...state, ..._.mapKeys(action.payload, '_id') };
    case CREATE_ITEM:
      return { ...state, [action.payload._id]: action.payload };
    case REMOVE_ITEM:
      return _.omit(state, action.payload._id);
    case REDUCE_ITEM_BY_50:
      return { ...state, [action.payload._id]: action.payload };
    case REDUCE_ITEM_BY_90:
      // console.log(action.payload);
      return { ...state, [action.payload._id]: action.payload };

    default:
      return state;
  }
};

export default itemsReducer;
