import React, { useState } from "react";
import Grid from '@mui/material/Unstable_Grid2';
import PokemonCard from "./PokemonCard";
import { useEffect } from "react";
import { Button, Container, Box } from "@mui/material";
import { Fab } from "@mui/material";
import LeftButton from '@mui/icons-material/KeyboardDoubleArrowLeft';
import RightButton from '@mui/icons-material/KeyboardDoubleArrowRight';




function PokemonCollection({currentPokemons, onButtonClick}) {

  const [currentPage, setCurrentPage] = useState(1);

  function handleNextPageClick(direction)
  {
    if(currentPage + direction > 0 && currentPage + direction < 5)
    {
      setCurrentPage(currentPage + direction)
      onButtonClick(currentPage)
    }
  }

  return (
    <>
    <Grid container columns={10}>
      <Grid xs="auto">
        <Fab color="primary" aria-label="add">
          <LeftButton onClick={()=> handleNextPageClick(-1)}/>
        </Fab>
      </Grid>

      <Grid xs={8}>  
        <Grid container spacing={10} justifyContent="center" alignItems="center">
          {currentPokemons.map(n =>{
            return <Grid key={n.name} xs={6} sm={4} md={3}><PokemonCard pokemon={n}/></Grid>
          })}
        </Grid>
      </Grid>
      
      <Grid xs="auto" >
        <Fab color="primary" aria-label="add">
          <RightButton onClick={()=> handleNextPageClick(1)}/>
        </Fab>
      </Grid>
    </Grid>
    <h1>Page: {currentPage}</h1>
    </>
  );
}

export default PokemonCollection;
