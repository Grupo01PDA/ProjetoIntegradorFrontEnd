const Sequelize = require('sequelize');
const db = require('../connection/db');
const Usuario = require('./user');

const Ranking = db.define('rankings', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    pontosMin: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
});

Ranking.hasMany(Usuario, {
    foreignKey: "idUsuario"
});
Usuario.belongsTo(Ranking)

module.exports = Ranking;

// 1 parametro NOME DA TABELA
// 2 parametro sao as colunas que devem ter na
// tabela
