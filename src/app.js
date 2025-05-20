import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão.", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso");
});

const app = express (); 
routes(app); //passando servidor express como parametro
//app.use(express.json());  //Sempre que alguém mandar JSON no corpo da requisição, transforma isso num objeto JavaScript e coloca dentro do req.body para que o Express consiga entender JSON vindo do front-end.


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