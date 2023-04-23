import React from "react";

function NavBar({ minusClick, plusClick, pokemonIndex, maxIndex }) {
    pokemonIndex=== 3 alert ("pika pikachuuuu !!");
    
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            
            {pokemonList.map((pokemon, index) => {
            return <button key={pokemon.name} onClick={ () => {handleClick(index) }}> {pokemon.name}</button>
        })} 
        </div>

    )
}

export default NavBar;