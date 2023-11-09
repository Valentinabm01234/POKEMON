

function formatPokemonArray(db) {
    const formattedArray = db.map((pokemon) => {

      // CREO UN FORMATO PARA MIS POKEMONS CREADOS

      const formattedTypes = pokemon.types.map((type) => type.name);

      return {
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        id: pokemon.id,
        name: pokemon.name,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        img: pokemon.img,
        types: formattedTypes,
      };
    });

    return formattedArray;
  }


  module.exports= formatPokemonArray;