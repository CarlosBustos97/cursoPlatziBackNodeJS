//Importa librerias
const express = require('express');
const faker = require('faker');
const router = express.Router();

// Lista un producto con id que pertenece a un categoria en especifico
router.get('/:categoryId/products/:productId', (req,res)=>{
  const {categoryId,productId} = req.params;
  res.json({
    categoryId,
    productId,
    name: 'Product 1',
    price: 1000
  });
});

module.exports = router;
