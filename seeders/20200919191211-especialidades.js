'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('especialidades', [
      {
        especialidade: 'Alergologia'
      }, {
        especialidade: 'Angiologia'
      }, {
        especialidade: 'Buco Maxilo'
      }, {
        especialidade: 'Cardiologia Clínica'
      }, {
        especialidade: 'Cardiologia Infantil'
      }, {
        especialidade: 'Cirurgia Cabeça e Pescoço'
      }, {
        especialidade: 'Cirurgia Cardíaca'
      }, {
        especialidade: 'Cirurgia de Torax'
      }, {
        especialidade: 'Cirurgia Geral'
      }, {
        especialidade: 'Cirurgia Pediátrica'
      }, {
        especialidade: 'Cirurgia Plástica'
      }, {
        especialidade: 'Cirurgia Vascular'
      }, {
        especialidade: 'Clínica Médica'
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('especialidades', null, {});
  }
};
