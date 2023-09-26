const Sequelize=require('sequelize')

const sequelize= new Sequelize ('node-project-1','root','Vaibhavlal123',{dialect: 'mysql', host: 'localhost'})

module.exports= sequelize