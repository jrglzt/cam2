import { Sequelize } from "sequelize";

const db = new Sequelize('base', 'root','', {
    host: 'localhost',
    dialect: 'mariadb',
    //logging: false
});

export default db;