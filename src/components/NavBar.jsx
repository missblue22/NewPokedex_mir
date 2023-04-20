import React from "react";

function NavBar({ minusClick, plusClick, pokemonIndex, maxIndex }) {
    pokemonIndex=== 3 alert ("pika pikachuuuu !!")
    
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            {pokemonIndex > 0 ? <button onClick={minusClick}>Previous Pokémon</button> : null}
            {pokemonIndex < maxIndex ? <button onClick={plusClick}>Next Pokémon</button> : null}
    
  }, 
        </div>

    )
}

export default NavBar;