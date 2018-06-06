import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({ poke }) => {
  return(
      <li className="pokedex-item">
        <Link className="link" to={`/pokemon/${poke.id}`}>
          {poke.name} : <img className="small-image" src={poke.image_url} />
        </Link>
      </li>

  );
};
