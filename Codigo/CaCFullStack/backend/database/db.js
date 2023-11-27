import { Sequelize } from 'sequelize';

export const db = new Sequelize('post23643', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})