import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import itemsReducer from './itemsReducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemsReducer
});

export default entitiesReducer;
