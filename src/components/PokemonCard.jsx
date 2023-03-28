import React from "react";
import PropTypes  from "prop-types";

function PokemonCard({pokemon}) {

    return (

        <figure>
            {pokemon.imgSrc === undefined ?
                <p>???</p>
                :
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" />
            }

            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}


PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  
  }

export default PokemonCard