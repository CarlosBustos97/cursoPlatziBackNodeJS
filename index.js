//Importa librerias
const express = require('express');
//Valida y manejo de cors
const cors = require('cors');
//importa el modulo don estan todas las rutas
const routerApi = require('./routes');
//importa middlewares de errores
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
//Crea una aplicación
const app = express('');
//Indica el puerto en el que va a correr la App
const port = 3000;


app.use(express.json());
//Habilita y permite cualquier dominio de origen
//app.use(cors());
//Lista de dominios con acceso
const whiteList = ['http://localhost:8080', 'https://myapp.co'];
//Valida si el origen esta incluido en la lista de dominios con acceso
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('No permitido'))
    }
  }
}
app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


//Indica que puerto debe escuchar;
app.listen(port,()=>{
  console.log('My port ' +  port);
});
