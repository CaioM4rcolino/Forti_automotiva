const express = require("express");

const controller = require('./controllers/funcoesClientes');

const endpoints = express.Router();

//configuração da rotaendpoints.get("/alunos", clienteController.listarAlunos);
endpoints.get("/pedidos", controller.listarClientes);
endpoints.post("/pedidos", controller.inserirPedido);

module.exports = endpoints;