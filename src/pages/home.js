import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import Header from "../components/Header";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  getPokemons,
  getMorePokemons,
  getPokemonBasedOnType,
} from "../services/pokemons";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const AllPokemon = () => {
  // Create a Map
  const typesMapping = new Map([
    ["normal", 1],
    ["fighting", 2],
    ["flying", 3],
    ["poison", 4],
    ["ground", 5],
    ["rock", 6],
    ["bug", 7],
    ["ghost", 8],
    ["steel", 9],
    ["fire", 10],
    ["water", 11],
    ["grass", 12],
    ["electric", 13],
    ["psychic", 14],
    ["ice", 15],
    ["dragon", 16],
    ["dark", 17],
    ["fairy", 18],
    ["shadow", 10002],
  ]);

  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);
  const [filter, setFilter] = useState("");
  const [pokeType, setPokeType] = useState("");

  const handleChange = (event) => {
    setPokeType(event.target.value);
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    console.log(pokeType)

    getPokemons().then((data) => {
      console.log(data);
      setPokemons(data);
    });
  }, []);

  const morePokemon = () => {
    getMorePokemons(count + 19).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount + 20;
      });
    });
  };

  const lessPokemon = () => {
    getMorePokemons(count - 21).then((data) => {
      setPokemons(data);
      setCount((prevCount) => {
        return prevCount - 20;
      });
    });
  };

  return (
    <>
      <Header />
      <div className="input-container">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <TextField
            className="search-input"
            onChange={handleSearchChange}
            label="Pokemon"
            variant="standard"
          />
        </div>

        <div className="type-container">
          <InputLabel className="type-label">Select Type</InputLabel>

          <Select
            className="type-select"
            value={pokeType}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Normal</MenuItem>
            <MenuItem value={2}>Fighting</MenuItem>
            <MenuItem value={3}>Flying</MenuItem>
            <MenuItem value={4}>Poison</MenuItem>
            <MenuItem value={5}>Ground</MenuItem>
            <MenuItem value={6}>Rock</MenuItem>
            <MenuItem value={7}>Bug</MenuItem>
            <MenuItem value={8}>Ghost</MenuItem>
            <MenuItem value={9}>Steel</MenuItem>
            <MenuItem value={10}>Fire</MenuItem>
            <MenuItem value={11}>Water</MenuItem>
            <MenuItem value={12}>Grass</MenuItem>
            <MenuItem value={13}>Electric</MenuItem>
            <MenuItem value={14}>Psychic</MenuItem>
            <MenuItem value={15}>Ice</MenuItem>
            <MenuItem value={16}>Dragon</MenuItem>
            <MenuItem value={17}>Dark</MenuItem>
            <MenuItem value={18}>Fairy</MenuItem>
          </Select>
        </div>
      </div>

      <div className="cards">
        {pokemons["results"] &&
          pokemons["results"].map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} id={count + index} />;
          })}
      </div>
      <div className="footer">
        <div className="btn" onClick={lessPokemon}>
          <h3 className="btn__text">Back</h3>
        </div>
        <div className="btn" onClick={morePokemon}>
          <h3 className="btn__text">Next</h3>
        </div>
      </div>
    </>
  );
};

export default AllPokemon;
