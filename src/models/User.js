import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';
import UserStatus from './UserStatus.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED, // ¡clave!
    autoIncrement: true,
    primaryKey: true
  },
  user_status_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    references: {
      model: UserStatus,
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  email_verified_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  remember_token: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'users',
  timestamps: true
});

User.belongsTo(UserStatus, {
  foreignKey: 'user_status_id',
  as: 'status'
});

export default User;
