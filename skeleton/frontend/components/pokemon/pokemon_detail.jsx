import React from 'react';


class PokemonDetail extends React.Component {


  componentDidMount() {
    // const pokefuckingId = parseInt(this.props.location.pathname.split("/")[2]);
    // console.log(typeof pokefuckingId);
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }


  render() {
    let pokeId = this.props.match.params.pokemonId;
    let pokemon = this.props.state.entities.pokemon[pokeId];
    let moves = pokemon.moves.map( e => <li>e</li>) || null;

    console.log(pokemon);
    return (<div>
    <img src={pokemon.image_url} />
    <ul>
      <li>{pokemon.name}</li>
      <li>Attack: {pokemon.attack}</li>
      <li>Defense: {pokemon.defense}</li>
      <li>Moves: {pokemon.moves}</li>
    </ul>

    </div>);
  }
}

export default PokemonDetail;
