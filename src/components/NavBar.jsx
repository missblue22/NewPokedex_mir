import React from "react";

function NavBar({ pokemonList, handleClick }) {
    
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            
            {pokemonList.map((pokemon, index) => {
            return <button key={pokemon.name} onClick={ () => {handleClick(index) }}> {pokemon.name}</button>
        })} 
        </div>

    )
}

export default NavBar;