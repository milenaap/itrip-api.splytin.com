import sequelize from '../datatabase/settings/config.js';
/**********
 * Models
 **********/
import '../models/User.js'; 

/**********
 * Seeders
 **********/
import { seedUsers } from '../datatabase/seeders/userSeeder.js';




async function resetDatabase() {
  try {
    await sequelize.authenticate();
    console.log('🔌 Conectado a la base de datos');

    await sequelize.sync({ force: true });
    console.log('🧨 Base de datos restablecida');

    await seedUsers(); // semilla inicial
    console.log('✅ Datos sembrados correctamente');


  } catch (error) {
    console.error('❌ Error al restablecer la base de datos:', error);
  } finally {
    await sequelize.close();
  }
}

resetDatabase();