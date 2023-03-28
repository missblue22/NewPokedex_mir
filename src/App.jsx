import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import React from 'react'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)

  function handleMinusIndex () {
    setPokemonIndex(pokemonIndex - 1)
  }

  function handlePlusIndex () {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <div style={{display: "flex", justifyContent:"space-around"}}>
        {pokemonIndex > 0 ? <button onClick={handleMinusIndex}>Previous Pokémon</button> : null}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handlePlusIndex}>Next Pokémon</button> : null}
        
      </div>
    </div>
  )
}

export default App
