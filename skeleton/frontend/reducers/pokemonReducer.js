import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = merge({}, state, action.pokemon);
      return newState;
    case RECEIVE_ONE_POKEMON:
      newState = merge({}, state);
      newState[action.payload.pokemon.id] = action.payload.pokemon;
      return newState;
    default: return state;
  }
};

export default pokemonReducer;
