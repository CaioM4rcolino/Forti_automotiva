const Sequelize = require("sequelize");
const dbConfig = require('../config/database');

const Cliente = require("../models/Pedidos");

const conexao = new Sequelize(dbConfig);

Cliente.init(conexao);

Cliente.associate(conexao.models);