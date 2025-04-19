import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';
import User from './User.js';
import Role from './Role.js';

const RoleUser = sequelize.define('RoleUser', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  role_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    references: {
      model: Role,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'role_user',
  timestamps: true,
  paranoid: true
});

User.belongsToMany(Role, {
  through: RoleUser,
  foreignKey: 'user_id',
  as: 'roles'
});

Role.belongsToMany(User, {
  through: RoleUser,
  foreignKey: 'role_id',
  as: 'users'
});

export default RoleUser;
