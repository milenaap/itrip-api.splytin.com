// database.js
import { Sequelize } from 'sequelize';

console.log(process.env.DB_DATABASE);

const sequelize = new Sequelize('node_test','root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;