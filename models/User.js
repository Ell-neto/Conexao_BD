const Sequelize = require('sequelize');
const db = require('./db');

// criamos as colunas(ou ainda, atributos) da tabela
const User = db.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Criar a tabela - utiliza para criar pela primeira vez a tabela, depois de criada, deixa comentada.
// User.sync();

// Verifica se há alguma diferença na tabela, realiza a alteração
//User.sync({ alter: true })

module.exports = User;
