
const Sequelize = require('sequelize');
const database = require('./db');

const Cadastro = database.define('cadastro', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_produto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor_produto: {
        type: Sequelize.DOUBLE
    },

})

module.exports = Cadastro;