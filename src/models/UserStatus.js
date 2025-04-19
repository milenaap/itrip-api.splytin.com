import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';

const UserStatus = sequelize.define('UserStatus', {
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
}, {
  tableName: 'user_statuses',
  timestamps: true,
  paranoid: true, // soft deletes
});

export default UserStatus;
