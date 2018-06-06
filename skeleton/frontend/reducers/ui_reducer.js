import { merge } from 'lodash';
import {RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';

const uiReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ONE_POKEMON:
      return {
        loading: false
      };
    default:
      return state;
  }
};

export default uiReducer;
