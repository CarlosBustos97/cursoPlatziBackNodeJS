//Importa librerias
const express = require('express');
const ProductsService = require('./../services/products.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema } = require('./../schemas/product.schemas');
const router = express.Router();
const service = new ProductsService();

//Nueva ruta en formato json
//Lista todos los productos
router.get('/', async (req,res)=>{
  const products = await service.find();
  res.json(products);
});

// Lista un solo producto
router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req,res, next)=>{
    try{
      const {id} = req.params;
      const products = await service.findOne(id);
      res.json(products);
    }catch(error){
      next(error);
    }
});

//Crea un nuevo producto

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res)=> {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

//Edita un producto parcialmente
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res)=> {
    try{
      const {id} = req.params;
      const body = req.body;
      const product = await service.update(id,body);
      res.json(product);
    }catch(error){
      next(error);
    }
});

//Elimina un producto
router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res)=> {
    try{
      const {id} = req.params;
      const product = await service.delete(id);
      res.json(product);
    }catch(error){
      next(error);
    }
});

module.exports = router;
