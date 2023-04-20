import React from "react";
// import PropTypes  from "prop-types";

function PokemonCard({pokemonName, pokemonIMG}) {

    return (

        <figure>
            {pokemonIMG === undefined ?
                <p>???</p>
                :
                <img src={pokemonIMG} alt="bulbasaur" />
            }

            <figcaption>{pokemonName}</figcaption>
        </figure>
    )
}


// PokemonCard.propTypes = {
//     pokemon: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       imgSrc: PropTypes.string,
//     }).isRequired,
  
//   }

export default PokemonCard