import React from "react";
import PropTypes  from "prop-types";

function PokemonCard({pokemon}) {

    return (

        <figure>
            {pokemon.imgSrc === undefined ?
                <p>???</p>
                :
                <img src={pokemon.imgSrc} alt="bulbasaur" />
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