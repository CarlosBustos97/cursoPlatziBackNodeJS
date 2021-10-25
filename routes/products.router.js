//Importa librerias
const express = require('express');
const faker = require('faker');
const router = express.Router();


//Nueva ruta en formato json
//Lista todos los productos
router.get('/', (req,res)=>{
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for(let index =0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/filter',(req,res) => {
  res.send("Soy un filter");
});


// Lista un solo producto
router.get('/:id', (req,res)=>{
  const {id} = req.params;
  if(id === '999' ){
    res.status(404).json({
      message: 'not found'
    });
  }else{
    res.status(200).json({
    id,
    name: 'Product 1',
    price: 1000
    });
  }

});

//Crea un nuevo producto

router.post('/', (req, res)=> {
  const body = req.body;
  res.estatus(201).json({
    message: 'creted',
    data: body
  });
});

//Edita un producto parcialmente
router.patch('/:id', (req, res)=> {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

//Elimina un producto
router.delete('/:id', (req, res)=> {
  const {id} = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
