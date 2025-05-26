import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";//metodo para captar erro de conexão

//o code abaixo é uma instancia da conexão
const conexao = await conectaNaDatabase(); //usar await pq a função conectaNaDatabase é async

conexao.on("error", (erro) => { 
    console.error("Erro de conexão.", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso");
});

const app = express (); 
routes(app); //passando servidor express como parametro
//app.use(express.json());  //Sempre que alguém mandar JSON no corpo da requisição, transforma isso num objeto JavaScript e coloca dentro do req.body para que o Express consiga entender JSON vindo do front-end.

export default app; //exporta o modulo