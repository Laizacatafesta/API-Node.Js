//centralizar todas as logicas que esta relacionada as ações que podem ser feitas em um livro.
//o que as rotas vão chamar para executar as operações e o manuseio das requisições e respostas correspondentes.

//Controllers contêm a lógica que responde às requisições HTTP.

import livro from  "../models/Livro.js";
//manipulação dos dados abaixo
class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({}); //Está buscando todos os documentos na coleção livros e armazenando na var. as chaves {} indica que não há filtro, ou seja, retorna todos.
            //Essa linha de cima assume que você já tem um modelo Mongoose chamado livro importado em algum lugar (fora do trecho que você colou).
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        };
    };

    static async listarLivroById(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Falha na requisição do livro` });
        };
    };

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body); //Cria um novo livro com os dados que vieram do front-end e salva no banco
            res.status(201).json({message: "Livro cadastrado com sucesso", livro: novoLivro}); //Esse novoLivro vem diretamente do MongoDB,  com os dados recém-cadastrados.
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar o livro.`});
        };
    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao atualizar o livro`});
        };
    };

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro deletado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao deletar o livro`});
        };
    };
};

export default LivroController;