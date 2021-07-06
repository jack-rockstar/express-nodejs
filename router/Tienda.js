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
//PARA CREAR UN NUEVO PRODUCTO
router.get('/crear1',async (req,res)=>{
    res.render('crear1')
})
router.post('/',async(req,res)=>{
   const body=req.body
   try{
      let tiendas= new tienda(body)
      await tiendas.save()
      res.redirect('/tienda')
   }catch(error){
       console.log("hola",error)
   }
})

//LEER SOLO UN PRODUCTO
 router.get('/:id',async(req,res)=>{
    let id=req.params.id
    try{
     const producto=await tienda.findOne({_id: id})
     res.render('inventario',{
        tienda:producto,
         error:false
     })
    }catch(error){
     res.render('inventario',{
         error:true,
         mensaje:'No existe ese producto'
         
        })
    }
}) 

})

module.exports=router;