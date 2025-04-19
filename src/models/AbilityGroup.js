import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';

const AbilityGroup = sequelize.define('AbilityGroup', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED, // ¡clave!
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'ability_groups',
  timestamps: true,
  paranoid: true, // 👈 Soft deletes (elimina con deletedAt)
});

export default AbilityGroup;
