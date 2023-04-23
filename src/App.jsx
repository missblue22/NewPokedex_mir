import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import React from "react";
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
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  function handleClickIndex (index) {
    setPokemonIndex(index)
  }

  useEffect(() => {
    alert("Bienvenue Pokemon Fans ;) !");

  []
  );

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}
       <NavBar pokemonList={pokemonList} handleClick={handleClickIndex}/>
   
   
    </div>
  );
}

export default App
