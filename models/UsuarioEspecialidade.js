let UsuarioEspecialidade = (sequelize, DataTypes) => {
    let usuario_especialidade = sequelize.define(
        "UsuarioEspecialidade", {
            usuario_id: {
                type: Sequelize.INTEGER,
                references: {
                  model: 'usuario',
                  key: 'id'
                },
                allowNull: false,
                primaryKey: true
              },
              especialidade_id: {
                type: Sequelize.INTEGER,
                references: {
                  model: 'especialidades',
                  key: 'id'
                },
                allowNull: false,
                primaryKey: true
              }
    }, {
        tableName: "usuario_especialidade",
        timestamps: true
    }
    );

    UsuarioEspecialidade.associate = (models) => {
        UsuarioEspecialidade.belongsTo(models.Usuario, { foreignKey: 'usuario_id' })
        UsuarioEspecialidade.belongsTo(models.Especialidades, { foreignKey: 'especialidade_id' })
    }

    return usuario_especialidade;
}

module.exports = UsuarioEspecialidade;