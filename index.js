// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta GET
app.get('/', (req, res) => {
  res.send('¡Hola desde Express!');
});

// Ruta POST
app.post('/usuario', (req, res) => {
  const { nombre } = req.body;
  res.send(`Usuario recibido: ${nombre}`);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
