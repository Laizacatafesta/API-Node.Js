import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão.", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso");
});

const app = express (); 
app.use(express.json()); 


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

function buscaLivros(id) {
    return livros.findIndex(livros => {
        return livros.id === Number(id);
    })
}
app.get("/", (req, res) => { //gerencia as rotas
    res.status(200).send("Curso de Node.Js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livros cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livros deletado com sucesso.");
});

export default app; //exporta o modulo

//mongodb+srv://laizacatafesta:<db_password>@cluster0.32fsz4z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0