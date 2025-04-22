import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'roles',
  timestamps: true,
  paranoid: true
});




export default Role;
