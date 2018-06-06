import React from 'react';
import PokemonDetail from './pokemon_detail';
import {requestOnePokemon} from '../../actions/pokemon_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  state
});


const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
