import express from "express";

const app = express (); //conjunto de codigo do express dentro da var app

app.get("/", (req, res) => { //gerencia as rotas
    res.status(200).send("Curso de Node.Js");
});

export default app; //exporta o modulo