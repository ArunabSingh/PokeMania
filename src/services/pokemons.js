const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = () => {
  return fetch(URL).then((response) => response.json());
};

export const getMorePokemons = (offset) => {
  return fetch(`${URL}?offset=${offset}&limit=20`).then((response) =>
    response.json()
  );
};

export const getPokemonBasedOnType = (type) => {

  const url = "https://pokeapi.co/api/v2/type";
  return fetch(`${url}/${type}/`).then((response) => response.json());
};
