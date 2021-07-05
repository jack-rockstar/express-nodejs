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
   
router.get('/crear',(req,res)=>{
    res.render('crear')
})
//
router.post('/', async(req,res)=>{
    const body=req.body
    try{
        
        const mascotadb= new mascota(body)
        await mascotadb.save()
        res.redirect('/mascotas')
    }catch(error){
      console.log(error)
    }
}) 

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