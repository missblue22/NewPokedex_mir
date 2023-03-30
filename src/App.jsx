import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import React from 'react'
import NavBar from './components/NavBar'

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

  function handleMinusIndex() {
    setPokemonIndex(pokemonIndex - 1)
  }

  function handlePlusIndex() {
    setPokemonIndex(pokemonIndex + 1)
  }

  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  );

  return (
    <div>
      <NavBar minusClick={handleMinusIndex} plusClick={handlePlusIndex} pokemonIndex={pokemonIndex} maxIndex={pokemonList.length - 1} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  )
}

export default App
