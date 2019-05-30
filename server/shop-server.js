const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const _ = require('lodash');

async function init() {
  const productsFile = './server/products.json';

  let products = await loadData(productsFile);

  app
    .use(cors())
    .use(express.json())
    .get('/shop/products', (req, res) => res.send(products))
    .get('/shop/products/:id', (req, res) => {
      const id = parseInt(req.params.id);
      res.send(products.find(product => product.id === id));
    })
    .post('/shop/products', async (req, res) => {
      const product = req.body;
      product.id = getNextId(products);
      products.push(product);
      await saveData(productsFile, products).then(() => res.send(products));
    })
    .put('/shop/products', async (req, res) => {
      const product = req.body;
      const existingProduct = products.find(p => p.id === product.id);
      Object.assign(existingProduct, product);
      await saveData(productsFile, products).then(() => res.send(products));
    })
    .delete('/shop/products/:id', async (req, res) => {
      const id = parseInt(req.params.id);
      products = products.filter(p => p.id !== id);
      await saveData(productsFile, products).then(() => res.send(products));
    })
    .listen(3000, () => console.log('server started on port 3000'));
}

function getNextId(items) {
  return (
    items
      .map(item => item.id)
      .sort((item1, item2) => (item1.id > item2.id ? 1 : -1))
      .pop() + 1
  );
}

async function loadData(filename) {
  return new Promise(resolve =>
    fs.readFile(filename, { encoding: 'UTF-8' }, (err, data) => resolve(JSON.parse(data).data))
  );
}

async function saveData(filename, data) {
  return new Promise(resolve =>
    fs.writeFile(
      filename,
      JSON.stringify({ data: data }),
      {
        encoding: 'UTF-8'
      },
      resolve
    )
  );
}

init();
