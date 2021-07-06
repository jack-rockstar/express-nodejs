const express=require('express')
const router=express.Router()

const mascota=require('../model/mascota')

router.get('/',async (req,res)=>{
      
     try{
    //con find podemos encontrar la coleccion de mongodb y traerlos
      const arrayMascota=await mascota.find()
      
       res.render("mascotas",{
        listaMascotas:"Aqui estan mis mascotas",
        arrays:arrayMascota
       })

     }catch(error){
         console.log(error)
     }
//PARA CREAR UNA NUEVA MASCOTA
router.get('/crear',(req,res)=>{
    res.render('crear')
})
router.post('/', async(req,res)=>{
    const body=req.body
    try{
        
        let mascotadb= new mascota(body)
        await mascotadb.save()
        res.redirect('/mascotas')
    }catch(error){
      console.log(error)
    }
}) 

})
//PARA LEER SOLO UN ID SELECCIONADO
 router.get('/:id', async(req,res)=>{
     const id=req.params.id;
    try{
       let mascotadb =await mascota.findOne({_id: id})
       res.render('detalle',{
           mascota:mascotadb,
           error:false
       })
    }catch(error){
        console.log(error)
        res.render('detalle',{
            error:true,
            mensaje:'No se encuentra el id seleccionado'
        })
    }
}) 


router.delete('/:id', async(req,res)=>{
    const id=req.params.id
    try{
     let mascotadb= await Mascota.findByIdAndDelete({_id: id})
     if(mascotadb){
      res.json({
          estado:true,
          mensaje:'Eliminado'
      })
     }else{
      res.json({
        estado:false,
        mensaje:' Fallo Eliminar'
      })
     }
    }catch(error){
        console.logo('error',error)
    }
})

module.exports=router;


/*este es la forma estatica sin base de datos
    res.render("mascotas",{
        arraysMascotas:[
            {id: '22' , nombre: 'rex', descripcion:'232323'}, 
            {id: '23' , nombre: 'dorie', descripcion:'232323'},
            {id: '24' , nombre: 'cuates', descripcion:'232323'} 
        ]
    })*/