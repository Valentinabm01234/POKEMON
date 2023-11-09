const { createPokemon } = require("../controllers/createPokemon");


const postHandler=async (req, res) => {
    try {
        const data = req.body;
        const pokemonCreado = await createPokemon(data);
        res.status(201).json(pokemonCreado);
    } catch (error) {
        res.status(500).json({ message: "Error creating Pokemon", error: error.message });
    }
};

module.exports = postHandler;

