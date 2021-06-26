const express=require('express')

//con eso podemos acceder al router
const router=express.Router();

//ruta de inicio
router.get('/',(req,res)=>{
    res.render("index",{titulo:"Mi titulo dinamico"})
    })
    
    
router.get('/inventario',(req,res)=>{
    res.render("inventario",{tituloInventario:"Te encuentras en el invetario bros"})
})

//sirve para poder exportar el codigo
module.exports= router;
    
