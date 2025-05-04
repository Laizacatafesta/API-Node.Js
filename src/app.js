import express from "express";

const app = express (); //conjunto de codigo do express dentro da var app

const livros = [
    {
        id: 1,
        titulo: "O senhor do anéis"
    },
    {
        id: 2,
        titulo: "O hobbit"
    }
]
app.get("/", (req, res) => { //gerencia as rotas
    res.status(200).send("Curso de Node.Js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app; //exporta o modulo