// AbilityGroupRepository.js
import { BaseRepository } from '../../helpers/repositories/baseRepository.js';
import AbilityGroup from '../../models/AbilityGroup.js';
import { Op } from 'sequelize'; // Para queries avanzadas si las necesitas


//const WITH = ['roles', 'status'];


export class AbilityGroupRepository extends BaseRepository {
  
  // 📌 List
  async list() {
    return await AbilityGroup.findAll({
      order: [this.LATEST],
      //include: WITH // si tienes relaciones definidas
    });
  }

  // 📌 Show
  async show(id) {
    return await AbilityGroup.findByPk(id, {
      //include: WITH
    });
  }

  // 📌 Find
  async findByEmail(email) {
    return await AbilityGroup.findOne({
      where: { email },
      //include: WITH
    });
  }

  // 📌 Store
  async store(data) {
    return await AbilityGroup.create(data);
  }

  // 📌 Update
  async update(id, data) {
    const AbilityGroup = await AbilityGroup.findByPk(id);
    if (!AbilityGroup) return null;
    return await AbilityGroup.update(data);
  }

  // 📌 Destroy (soft-delete)
  async destroy(id) {
    const AbilityGroup = await AbilityGroup.findByPk(id);
    if (!AbilityGroup) return null;
    return await AbilityGroup.destroy();
  }

  // 📌 Restaurar usuario soft-deleted
  async restore(id) {
    const AbilityGroup = await AbilityGroup.findByPk(id, { paranoid: false });
    if (!AbilityGroup) return null;
    return await AbilityGroup.restore();
  }

  // 📌 Buscar por nombre o correo
  async search(term) {
    return await AbilityGroup.findAll({
        //include: WITH,
        where: {
            [Op.or]: [
            { name: { [Op.like]: `%${term}%` } },
            { email: { [Op.like]: `%${term}%` } }
            ]
        }
    });
  }
}
