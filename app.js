/*const{frutas , dinero , inventario}=require('./frutas')

const  cowsay  =  require ( "cowsay" ) ;

console.log(cowsay.say({ 
    text : "Hola amigos soy jack " , 
    e : "oO" , 
    T : "U" 
}));


frutas.forEach(item =>{
    console.count(item)
})
console.log(inventario)
console.log(dinero) */

//intercambio de comunicacion con lenguaje de servidor node.js

/*const http=require('http')
const server= http.createServer((req,res)=>{
    res.end('EStoy Respondiendo a tu solicitud v.43')
})
const puerto=3000;
server.listen(puerto,()=>{
    console.log('escuchando solicitudesss')
})*/


//asi usamos el modulo express
const express=require('express')
const app=express()

//Q BUSQUE UNA VARIABLE EN PORT Y SI NO EXISTE  QUE NOS DESIGNE AL 3000s
const puerto=process.env.PORT || 3000;

//Conexion a base de datos 
const mongoose=require('mongoose');

const usuario='jack_vet'
const pass='GBsShEhe3VAY5Aay'
const dbname='veterinaria'
const uri=`mongodb+srv://${usuario}:${pass}@cluster0.ewv87.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri,
    {useNewUrlParser:true, useUnifiedTopology:true}
)
.then(() => console.log('base de datos conectada'))
.catch( e=> console.log('error de conexion',e))

//motor de plantilla
app.set('views',__dirname + '/view');
app.set('view engine', 'ejs')



app.use(express.static(__dirname +'/public'));

/*app.get('/',(req,res)=>{
   // console.log(__dirname)
    res.send('Mi respuesta desde express v.2')
}) 

//PAGINAS ESTATICAS
/*app.use((req,res,next)=>{
    res.status(404).sendfile(__dirname+'/public/index.html')
})*/

//aqui extraemos nuestras rutas web con requiere
app.use('/',require('./router/rutasWeb'));
app.use('/mascotas',require('./router/Mascotas'));
app.use('/tienda',require('./router/Tienda'))


//si tiene use estamos usando un middleware
app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo:'perdimos señal',
        descripcion:'Estamooos callenndooo'
    })
})


app.listen(puerto,()=>{
    console.log('Estamos en sus ordenes en el puerto '+puerto)
})


