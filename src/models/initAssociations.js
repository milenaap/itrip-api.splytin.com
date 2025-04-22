// Relaciones del modelo User
import User from './User.js';
import UserStatus from './UserStatus.js';
import RoleUser from './RoleUser.js';
import Role from './Role.js';

User.belongsTo(UserStatus, {
  foreignKey: 'user_status_id',
  as: 'status',
  onDelete: 'CASCADE'
});


User.hasMany(RoleUser, {
  foreignKey: 'user_id',
  as: 'role_user'
});

User.belongsToMany(Role, {
  through: RoleUser,
  foreignKey: 'user_id',
  otherKey: 'role_id',
  as: 'roles'
});
