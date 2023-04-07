import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonCard = (props) => {
  const getThreeDigitId = (id) => {
    if (id < 10) return `00${id}`
    if (id < 100) return `0${id}`
    return id
  }

  return (
    <NavLink className='card' to={{ pathname: `/pokemon/${props.name}` }}>
      <h3 className='card__title'>{props.name}</h3>
      <img
        className='card__img'
        src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(props.id)}.png`}
        alt='pokemon-pic'
      />
    </NavLink>
  );
};

export default PokemonCard;