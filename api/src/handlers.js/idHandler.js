const {getPokemonId} = require ("../controllers/getPokemonId")

const idHandler=async (req, res) => {
    const { id } = req.params;
    try {
        const data = await getPokemonId({ id }); // Pass the id as an object
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ error: "No existe un Pokémon con ese ID" });
    }
};

module.exports=idHandler;