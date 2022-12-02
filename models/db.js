const Sequelize = require('sequelize')

// instancio com new         --nome base de dados -- usuario -- senha
const sequelize = new Sequelize("manoel", "****", "****", {
    host: 'localhost',
    dialect: 'mysql'
});

// verificar se funcionou a conexão
sequelize.authenticate()
.then(function(){
    console.log("Conexao com o banco de dados com sucesso!")
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados não realizada com sucesso!")
})

module.exports = sequelize;
