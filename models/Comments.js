const Sequelize= require('sequelize')
const sequelize= require('../util/database')

const comments= sequelize.define('Comments',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    comments: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports= comments