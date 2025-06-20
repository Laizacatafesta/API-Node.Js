import { autor } from "../models/Autor.js";

class AutorController {
    static async listarAutor(req, res) {
        try {
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);
        } catch (erro) {
            res.status(500).json({message: `${erro.mensage} - Erro ao listar Autor`});
        };
    };

    static async encontrarAutor(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json({autorEncontrado});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        };
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(200).json({message: "Autor cadastrado com sucesso!", autor: novoAutor});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        };
    };

   static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            const atualizarAutor = await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor atualizado com sucesso"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na atualização`});
        };
   };

   static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            const deletarAutor = await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Autor deletado com sucesso"});
        } catch (erro) {
            res.status(500).json({message:`${erro.message} - Erro ao deletar autor`});
        };
   };
};

export default AutorController;