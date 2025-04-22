import { DataTypes } from 'sequelize';
import sequelize from '../database/settings/config.js';


const User = sequelize.define('User', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  user_status_id: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
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
  is_edited: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true
  },
  is_google: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  remember_token: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'users',
  timestamps: true,
  paranoid: true // para habilitar soft deletes
});



User.prototype.toJSON = function() {
  
  const values = { ...this.get() };

  delete values.password;
  delete values.remember_token;

  return values;
}


export default User;
