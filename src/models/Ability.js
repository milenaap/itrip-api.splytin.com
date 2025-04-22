import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


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
  }
}, {
  tableName: 'abilities',
  timestamps: true,
  paranoid: true
});



export default Ability;
