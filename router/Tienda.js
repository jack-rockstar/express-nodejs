const express=require('express')
const router=express.Router()


const tienda=require('../model/tienda')

router.get('/', async (req,res)=>{
    try{
    const arrayTiendas= await tienda.find();
    res.render("tienda",{
        Listatienda: "bienvenido a la tienda",
        arrayTienda:arrayTiendas
    })
    }catch(error){
      console.log('fallo',error)
       }

})

module.exports=router;