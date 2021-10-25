//Importa librerias
const express = require('express');
//importa el modulo don estan todas las rutas
const routerApi = require('./routes');
//Crea una aplicación
const app = express('');
//Indica el puerto en el que va a correr la App
const port = 3000;

app.use(express.json());

routerApi(app);


//Indica que puerto debe escuchar;
app.listen(port,()=>{
  console.log('My port ' +  port);
});
