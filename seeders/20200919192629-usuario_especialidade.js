'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuario_especialidade', [
      {
        usuarioId: 1,
        especialidadeId: 3
      }, {
        usuarioId: 1,
        especialidadeId: 5
      }, {
        usuarioId: 2,
        especialidadeId: 13
      }, {
        usuarioId: 2,
        especialidadeId: 1
      }, {
        usuarioId: 3,
        especialidadeId: 6
      },{
        usuarioId: 3,
        especialidadeId: 12
      },{
        usuarioId: 3,
        especialidadeId: 11
      },{
        usuarioId: 4,
        especialidadeId: 5
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario_especialidade', null, {});
  }
};
