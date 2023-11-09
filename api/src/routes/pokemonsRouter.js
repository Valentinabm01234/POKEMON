const { Router } = require("express");
const pokemonsRouter = Router()


const idHandler = require("../handlers.js/idHandler");
const postHandler = require("../handlers.js/postHandler");
const getPokemonsHandler = require("../handlers.js/getPHandler");


// 🆗 ruta finalizada  GET
pokemonsRouter.get("/",getPokemonsHandler)




//middware de validacion de datos
const middlewarePostValidation = (req, res, next) => {
    const { name, img, hp, attack, defense, types } = req.body;
  
    const error = {
      "error": "Required data is incomplete",
      "details": "Make sure to provide all the necessary data in the request."
    }
  
    if (![name, img, hp, attack, defense, types].every(Boolean) || types.length < 2) {
      return res.status(400).json(error);
    }
  
    next();
  }
  
  
// 🆗 ruta finalizada  POST 
pokemonsRouter.post("/",middlewarePostValidation,postHandler);

// 🆗 ruta finalizada  GET:ID
pokemonsRouter.get("/:id",idHandler )



module.exports = pokemonsRouter;