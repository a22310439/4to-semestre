// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Página Principal');
});

app.get('/nosotros', (req, res) => {
  res.send('Página Nosotros');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
