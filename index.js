//Llama a express
const express = require('express');
//Crea una aplicación
const app = express();
//Indica el puerto en el que va a correr la App
const port = 3000;
//Crea la ruta con un callback que corresponde a la respuesta
app.get('/', (req,res)=>{
  res.send('Hola mi server en express')
});

//Indica que puerto debe escuchar;
app.listen(port,()=>{
  console.log('My port' +  port);
});
