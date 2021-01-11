//importa o express 
const express = require('express');

//Importa as rotas
const endpoints = require('./endpoints');

require('./database');

//cria a aplicação express
const app = express();

app.use(express.json());

app.use(endpoints);

module.exports = app;