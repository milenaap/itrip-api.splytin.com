import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';
import AbilityGroup from './AbilityGroup.js';

const Ability = sequelize.define('Ability', {
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
  label: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ability_group_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    references: {
      model: AbilityGroup,
      key: 'id'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'abilities',
  timestamps: true,
  paranoid: true
});

Ability.belongsTo(AbilityGroup, {
  foreignKey: 'ability_group_id',
  as: 'group'
});

export default Ability;
