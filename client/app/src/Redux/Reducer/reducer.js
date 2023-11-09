import {
    FILTER_POKEMON,
    GET_ALL_POKEMONS,
    ORDER_NAME,
    ORDER_POKEMONS,
    ORIGIN_POKEMON,
    SEARCH_POKEMON
} from "../Actions/actions";

const initialState = {
  cargando:true,
    pokemons: [],
    allPokemons: [],
 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
                cargando:false,

            };


        case ORDER_POKEMONS:
            if (action.payload === "maxMin") {
                return {
                    ...state,
                    pokemons: state.pokemons.slice().sort((a, b) => b.attack - a.attack),
                };
            } else if (action.payload === "minMax") {
                return {
                    ...state,
                    pokemons: state.pokemons.slice().sort((a, b) => a.attack - b.attack),
                };
            }
            
            return state; 

        

            case ORDER_NAME:
              const sortedArr = [...state.pokemons];
              
              sortedArr.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                
                if (action.payload === 'ascName') {
                  return nameA.localeCompare(nameB);
                } else if (action.payload === 'descName') {
                  return nameB.localeCompare(nameA);
                }

                return 0;
              });
            
              return {
                ...state,
                pokemons: sortedArr,
              };
            


        case FILTER_POKEMON:

            const filterPokemonByType = (pokemon, typeToMatch) =>
                pokemon.types.some(
                    (type) => type.toLowerCase() === typeToMatch.toLowerCase()
                );

            return {
                ...state,
                pokemons: state.allPokemons.filter((pokemon) =>
                    filterPokemonByType(pokemon, action.payload)
                )
            };



        case ORIGIN_POKEMON:
            if (action.payload === "DB") {
                return {
                    ...state,
                    pokemons: state.allPokemons.filter((pokemon) => pokemon.id.length > 8)
                };
            } else {
                return {
                    ...state,
                    pokemons: state.allPokemons.filter((pokemon) => !isNaN(pokemon.id)),
                };
            }
            return state; 
             

            case SEARCH_POKEMON:
                const newData = action.payload;
                
            
                const existingPokemonIndex = state.pokemons.findIndex(pokemon => pokemon.name === newData.name);
                
                if (existingPokemonIndex !== -1) {
               
                  const updatedPokemons = [...state.pokemons];

                  updatedPokemons.splice(existingPokemonIndex, 1);
                  
               
                  updatedPokemons.unshift(newData);
              
                  return {
                    ...state,
                    pokemons: updatedPokemons,
                    allPokemons: updatedPokemons,
                  };
                } else {
               
                  const newAll = [newData, ...state.pokemons];
              
                  return {
                    ...state,
                    pokemons: newAll,
                    allPokemons:newAll,
                  };
                }
              
              

        default:
            return state;
    }
};

export default reducer;

