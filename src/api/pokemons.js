const BASE_URL = 'https://pokeapi.co/api/v2';

export function fetchPokemons(offset = 0, limit = 12)
{
    return fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`)
    .then(response => {
        if (response.ok)
        return response.json()
        throw new Error('ERROR')
    })
    .then(data =>{
        return data.results
    })
    .catch(error =>{
        console.error(`Problame with fetch. ERROR: ${error}`)
    })
}

export function fetchPokemon(pokemonName)
{
    return fetch(`${BASE_URL}/pokemon/${pokemonName}`)
    .then(response => {
        if(response.ok)
        return response.json()
        throw new Error(`Error`)
    })
    .catch(error => {
        throw new Error(`Problame with fetch. ERROR: ${error}`)
    })
}