import express from "express";
import livros from "./livrosRoutes.js";


//centralizando as rotas na const routes, a partir disso, o express vai gerenciar tudo de uma vez
const routes = (app) => { //serve para agrupar todas as rotas que vou receber
    app.route("/").get((req, res) => res.status(200).send("Curso de nodeJS"));

    app.use(express.json(), livros); //o middleware esta pegando todas as rotas de livrosRoutes.js
    //use serve para incluir middlewares da instancia do express
};

export default routes;