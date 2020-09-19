'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuario', [
      {
        nome: 'Alex Silva',
        crm: 123456,
        telefone: '11912345678',
        estado: 'SP',
        cidade: 'São Paulo',
      },{
        nome: 'Dráuzio Varela',
        crm: 13449,
        telefone: '11988083344',
        estado: 'SP',
        cidade: 'São Paulo',
      },{
        nome: 'Jane Doe',
        crm: 246810,
        telefone: '11912348765',
        estado: 'MG',
        cidade: 'Belo Horizonte',
      },{
        nome: 'John Doe',
        crm: 987654,
        telefone: '11923413456',
        estado: 'RJ',
        cidade: 'Niteroi',
      } ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
