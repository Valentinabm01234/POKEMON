const { Router } = require ("express");
const typesRouter = Router();


const handerType = require("../handlers.js/typeHander");

typesRouter.get("/", handerType )



module.exports= typesRouter;