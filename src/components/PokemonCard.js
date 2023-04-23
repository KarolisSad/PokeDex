import React, { useEffect } from "react";
import { useState } from "react";
import { fetchPokemons } from "../api/pokemons.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PokemonInfoModal from "../components/PokemonInfoModal.js"

function PokemonCard({ pokemon }) {
  const [currentPokemonList, setCurrentPokemonList] = useState([]);
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    fetchPokemons().then((result) => {
      setCurrentPokemonList(result);
    });
  }, []);

  function handleClick()
  {
    setModalState(true)
  }

  function handleModalClose() {
    setModalState(false);
  }

  return (
        <Card
          sx={{
            width: "250px",
            height: "250",
            textAlign: "center",
            backgroundColor: "lightgreen",
          }}
        >
          <CardActionArea onClick={handleClick}>
            <CardContent
              sx={{
                flex: "1 0 auto",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <Typography component="div" variant="h5">
                {pokemon.name}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 151, margin: "0 auto" }}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`}
              alt="Live from space album cover"
            />
          </CardActionArea>
          {modalState && (
        <PokemonInfoModal
          pokemon={pokemon}
          handleClose={handleModalClose}
        />
      )}
        </Card>
  );
}

export default PokemonCard;
