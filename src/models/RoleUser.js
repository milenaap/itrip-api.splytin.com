import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const RoleUser = sequelize.define('RoleUser', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  role_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  }
}, {
  tableName: 'role_user',
  timestamps: true,
  paranoid: true
});


export default RoleUser;
