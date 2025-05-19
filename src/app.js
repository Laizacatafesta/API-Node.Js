import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão.", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso");
});

const app = express (); 
app.use(express.json()); 

app.get("/", (req, res) => { //gerencia as rotas
    res.status(200).send("Conectado");
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livro[index]);
});

app.post("/livros", (req, res) => {
    livro.push(req.body);
    res.status(201).send("Livros cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livro[index].titulo = req.body.titulo;
    res.status(200).json(livro);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livro.splice(index, 1);
    res.status(200).send("Livros deletado com sucesso.");
});

export default app; //exporta o modulo