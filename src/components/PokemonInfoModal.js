import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from "@mui/material";
import { fetchPokemon } from '../api/pokemons.js'

function PokemonInfoModal({ pokemon, handleClose }) {

    const [pokemonDetails, setPokemonDetails] = useState('')

    useEffect( ()=> {
        fetchPokemon(pokemon.name)
        .then(result => {
            setPokemonDetails(result)
        })
      }, [pokemon])

 

      return (
        <Dialog variant="contained" open={true} onClose={handleClose}>
          <DialogTitle>{pokemon.name}</DialogTitle>
          <DialogContent>
            {pokemonDetails && (
              <React.Fragment>
                <DialogContentText>
                  <strong>Type:</strong>{" "}
                  {pokemonDetails.types.map(type => type.type.name).join(", ")}
                </DialogContentText>
                <DialogContentText>
                  <strong>Height:</strong> {pokemonDetails.height / 10} m
                </DialogContentText>
                <DialogContentText>
                  <strong>Weight:</strong> {pokemonDetails.weight / 10} kg
                </DialogContentText>
                <img src={pokemonDetails.sprites.front_default} alt={pokemon.name} />
              </React.Fragment>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      );

}


export default PokemonInfoModal;