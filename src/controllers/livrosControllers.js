//centralizar todas as logicas que esta relacionada as acções que podem ser feitas em um livro.
//o que as rotas vão chamar para executar as operações e o manuseio das requisições e respostas correspondentes.

//Controllers contêm a lógica que responde às requisições HTTP.

import livro from  "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        const listaLivros = await livro.find({}); //Está buscando todos os documentos na coleção livros e armazenando na var. as chaves {} indica que não há filtro, ou seja, retorna todos.
        //Essa linha de cima assume que você já tem um modelo Mongoose chamado livro importado em algum lugar (fora do trecho que você colou).
        res.status(200).json(listaLivros);
    };

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "Livro cadastrado com sucesso", livro: novoLivro});
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar o livro.`})
        };
    };
};

export default LivroController;