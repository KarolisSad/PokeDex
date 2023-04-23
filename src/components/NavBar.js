import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';


function NavBar()
{
    return (
        <AppBar position="static">
          <Toolbar variant="dense">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <Typography variant="h6" color="inherit" component="div">
            <HomeIcon sx={{ mr: 1 }} />
            
          </Typography>
        </Link>
            {/* <Link to="/" style={{ marginLeft: "auto" }}>
              Home   
            </Link>
            <Link to="/pokemons">Pokemons</Link> */}
          </Toolbar>
        </AppBar>
      );
}


export default NavBar