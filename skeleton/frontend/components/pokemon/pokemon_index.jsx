import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    const pokemonList = pokemon.map( poke => {
      return ( <PokemonIndexItem className="poke-index"key={poke.id} poke={poke}/> );
    });

    return (<div>
     <Route path="/pokemon/:pokemonId" className="red" component={PokemonDetailContainer} />
    <ul>{pokemonList}</ul>
    </div>);
  }
}

export default PokemonIndex;
