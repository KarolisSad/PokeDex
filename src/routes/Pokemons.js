import { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import PokemonCollection from '../components/PokemonCollection';
import { fetchPokemons } from '../api/pokemons.js'

export default function Pokemons() {

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

    return  (
        <>
        <PokemonCollection currentPokemons={currentPokemons} onButtonClick={onButtonClick}></PokemonCollection>
       </>
    )
}
    
