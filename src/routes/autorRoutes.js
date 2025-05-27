import express from "express";
import AutorController from "../controllers/autorControllers.js";

const routes = express.Router();

routes.get("/autor", AutorController.listarAutor);
routes.get("/autor/:id", AutorController.encontrarAutor);
routes.post("/autor", AutorController.cadastrarAutor);
routes.put("/autor/:id", AutorController.atualizarAutor);
routes.delete("/autor/:id", AutorController.deletarAutor);

export default routes;