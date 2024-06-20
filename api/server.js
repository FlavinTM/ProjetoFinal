// server.js
const express = require('express');
const dotenv = require('dotenv');
const clienteRoutes = require('./routes/clienteRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/api/clientes', clienteRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
