//const Sequelize = require('sequelize');
//const db = require('../config/database');

const bookshelf = require('../config/bookshelf');

const applications = bookshelf.Model.extend({
    tableName: 'applications'
});

module.exports = applications;
/*
const Applications = db.define( 'applications', {
    id :{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    haslo: {
        type: Sequelize.TEXT
    },   
    name: {
        type: Sequelize.TEXT
    },    
    mark: {
        type: Sequelize.TEXT
    },
    message: {
        type: Sequelize.TEXT
    },    
});

module.exports = Applications;
*/