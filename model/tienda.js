const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const tiendaSchema= new Schema({
    producto:String,
    descripcion:String,
    precio:String
})

const tienda=mongoose.model('tienda',tiendaSchema);

module.exports = tienda;