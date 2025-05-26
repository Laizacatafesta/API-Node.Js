import { autor } from "../models/Autor.js";

class AutorController {
    static async autorController(req, res) {
        try {
            const listaAutor = await autor.find({});
            res.status(200).json(listaAutor);
        } catch (erro) {
            res.status(500).json({message: `${erro.mensage} - Erro ao listar Autor`});
        };
    };

    static async encontrarAutorById(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json({autorEncontrado});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        };
    };

    static async cadastrarAutorById(req, res) {
        try {
            const id = req.params.id;
            const cadastrarAutor = await autor.create(req.body);
            res.status(200).json({message: "Autor cadastrado com sucesso!", autor: novoAutor});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        };
    };

    
};

export default AutorController;