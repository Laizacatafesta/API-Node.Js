import express from "express";
import AutorController from "../controllers/autorControllers.js";

const routes = express.Router;

routes.get("/autor", AutorController.listaAutor);
routes.get("/autor/:id", AutorController.listaAutor);
routes.post("/autor", AutorController.listaAutor);