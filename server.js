import http from "http";

const PORT = 3000;

const rota = {
    "/" : "Curso de Node",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain" }); //cabeçalho da resposta
    res.end(rota[req.url]);
});

server.listen(3000, () => { //
    console.log("Servidor escutando");
});