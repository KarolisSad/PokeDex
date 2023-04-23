import React from "react"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom";

export default function FrontPage() {
    return (
    <>
        <h1>
            Find your favorite pokemon!
        </h1>
        <h3><Link to="/pokemons">Check Pokemons!</Link></h3>
    </>
    )
}
