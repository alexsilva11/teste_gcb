'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario_especialidade', { 
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        },
        allowNull: false,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      especialidade_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'especialidades',
          key: 'id'
        },
        allowNull: false,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuario_especialidade');
  }
};
