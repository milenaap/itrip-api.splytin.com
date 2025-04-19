import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';
import User from './User.js';
import Ability from './Ability.js';

const AbilityUser = sequelize.define('AbilityUser', {
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
  ability_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    references: {
      model: Ability,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'ability_user',
  timestamps: true,
  paranoid: true
});

Ability.belongsToMany(User, {
  through: AbilityUser,
  foreignKey: 'ability_id',
  as: 'users'
});

User.belongsToMany(Ability, {
  through: AbilityUser,
  foreignKey: 'user_id',
  as: 'abilities'
});

export default AbilityUser;
