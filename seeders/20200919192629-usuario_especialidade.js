'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuario_especialidade', [
      {
        usuario_id: 1,
        especialidade_id: 3
      }, {
        usuario_id: 1,
        especialidade_id: 5
      }, {
        usuario_id: 2,
        especialidade_id: 13
      }, {
        usuario_id: 2,
        especialidade_id: 1
      }, {
        usuario_id: 3,
        especialidade_id: 6
      },{
        usuario_id: 3,
        especialidade_id: 12
      },{
        usuario_id: 3,
        especialidade_id: 11
      },{
        usuario_id: 4,
        especialidade_id: 5
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario_especialidade', null, {});
  }
};
