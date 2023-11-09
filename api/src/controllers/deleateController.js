const { Pokemon, Type } = require ('../db');

const deletePokemon =async(id) =>{

    const pokemonDel = await Pokemon.destroy({
        where: {
            id: pokemon.id
        },
        include: [{
            model: Type,
        }]
    });
    
    const pokemon = (pokemonDel !== 0) ? 'Deleted Pokémon!' : 'Pokemón Undefined' 

    return pokemon


}
module.exports = deletePokemon