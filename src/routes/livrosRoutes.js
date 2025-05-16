import express from "express";
import LivroController from "../controllers/livrosControllers.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);