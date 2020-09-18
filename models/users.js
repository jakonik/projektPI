const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define( 'users', {
    id_user :{
        type: Sequelize.INTEGER,
        primaryKey: true
    },  
    name: {
        type: Sequelize.TEXT
    },    
    surname: {
        type: Sequelize.TEXT
    },
    mail: {
        type: Sequelize.TEXT
    },
    czy_ankieta_wyp :{
        type: Sequelize.INTEGER
    },   
});

module.exports = Users;