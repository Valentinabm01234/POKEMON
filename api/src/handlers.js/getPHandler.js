const { getPokemon } = require("../controllers/getPokemon")


const getPokemonsHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const allPokemon = await getPokemon(name);
        res.status(200).json(allPokemon);
    } catch (error) {
        res.status(404).json({ error: "The Pokémon you're trying to search for doesn't exist" })
    }
};

module.exports =getPokemonsHandler;