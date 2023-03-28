import React from "react";

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

export default PokemonCard