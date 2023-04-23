import { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import PokemonCollection from './components/PokemonCollection';
import { fetchPokemons } from './api/pokemons.js'

function App() {

  const [currentPokemons, setCurrentPokemons] = useState([]);

  useEffect( ()=> {
    fetchPokemons()
    .then(result => {
      setCurrentPokemons(result)
    })
  }, [])

  function onButtonClick(page)
  {
      fetchPokemons(page * 20 - 20)
      .then(result => {
        setCurrentPokemons(result)
      })
  } 

  return (
    <>
    <PokemonCollection currentPokemons={currentPokemons} onButtonClick={onButtonClick}></PokemonCollection>
   </>
  );
}

export default App;
