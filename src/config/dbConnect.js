 import mongoose, {mongo} from "mongoose";

 async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://laizacatafesta:Alura123@cluster0.32fsz4z.mongodb.net/livraria/?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection;
    };

    export default conectaNaDatabase;


