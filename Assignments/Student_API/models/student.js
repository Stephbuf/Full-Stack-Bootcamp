const Sequelize = require('sequelize');
const db_config = require('../db_config');

const Student = db_config.define('student', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gpa: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    nationality: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, {timestamps: false});

module.exports = Student;