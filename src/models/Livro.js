import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({ //transforma o schema do mongoDB em js -- Assim não precisa criar querys.
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type:  String, required: true},
    editora: {type: String, },
    preco: {type: Number},
    paginas: {type: Number}
}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema); //"livro"referencia a coleção no mongoDB

export default livro;