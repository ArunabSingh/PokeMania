import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import Header from '../components/Header';
import { getPokemons, getMorePokemons } from '../services/pokemons';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    getPokemons().then((data) => {
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
      <div className='search-container'>
            <SearchIcon className='search-icon' />
            <TextField
              className='search-input'
              onChange={handleSearchChange}
              label="Pokemon"
              variant="standard"
            />
          </div>

      <div className='cards'>
        {pokemons['results'] &&
          pokemons['results'].map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} id={count + index} />;
          })}
      </div>
      <div className='footer'>
        <div className='btn' onClick={lessPokemon}>
          <h3 className='btn__text'>Back</h3>
        </div>
        <div className='btn' onClick={morePokemon}>
          <h3 className='btn__text'>Next</h3>
        </div>
      </div>
    </>
  );
};

export default AllPokemon;