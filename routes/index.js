const express = require('express');
//Importa las rutas de la app
const productsRouter  = require('./products.router');
const usersRouter  = require('./users.router');
const categoriesRouter  = require('./categories.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products',productsRouter);
  router.use('/categories',categoriesRouter);
  router.use('/users',usersRouter);
}


module.exports = routerApi;
