const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
})

async function connect(){
    try{
        await sequelize.authenticate();
        await sequelize.sync();
    }catch (e) {
        console.log(e);
    }
}

connect().then();

module.exports = sequelize;