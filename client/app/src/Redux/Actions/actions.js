// actions.js
import axios from 'axios';


export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const ORDER_POKEMONS = "MAX_MIN_POKEMONS";
export const FILTER_POKEMON = "FILTER_POKEMON";
export const ORIGIN_POKEMON = "ORIGIN_POKEMON";
export const ORDER_NAME = "ORDER_NAME"
export const SEARCH_POKEMON = "SEARCH_POKEMON"


export const fetchPokemons = () => {
  return  getpokemons = async () => {

    try {
      const pokemons =await  axios.get("localhost:3001/pokemons").response(data)
      return {type:GET_ALL_POKEMONS,
        payload:pokemons}
    }
    catch (error) {
     
      return {err: error.message }
  }
}

};




export const orderPokemons = (data) => {
  return { type: ORDER_POKEMONS, payload: data };
};



export const filterPokemon = (data) => {
  return { type: FILTER_POKEMON, payload: data };
};




export const originPokemon = (data) => {
  return { type: ORIGIN_POKEMON, payload: data }
};



export const orderName = (data) => {
  return { type: ORDER_NAME, payload: data }
};



export const searchPokemon = (name) => {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
      dispatch({
        type: SEARCH_POKEMON,
        payload: json.data
      });
    } catch (error) {
      console.log("error searchin the pokemon name!")
    }
  };
};

