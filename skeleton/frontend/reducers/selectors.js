import values from 'lodash/values';

export const selectAllPokemon = state => {
  return _.values(state.entities.pokemon);
};
