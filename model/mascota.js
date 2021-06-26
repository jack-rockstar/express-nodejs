//aqui se hace un esquema que define la forma de los futuros documentos de dicha seleccion

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const mascotaSchema=new Schema({
    nombre: String,
    descripcion: String
})

//crear modelo 

const mascota=mongoose.model('mascota',mascotaSchema);

module.exports = mascota;