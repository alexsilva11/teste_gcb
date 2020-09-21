let UsuarioEspecialidade = (sequelize, DataTypes) => {
    let usuario_especialidade = sequelize.define(
        "UsuarioEspecialidade", {
            usuarioId: {
                type: DataTypes.INTEGER,
                references: {
                  model: 'usuario',
                  key: 'id'
                },
                allowNull: false,
                primaryKey: true
              },
              especialidadeId: {
                type: DataTypes.INTEGER,
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
        UsuarioEspecialidade.belongsTo(models.Usuario, { foreignKey: 'usuarioId' })
        UsuarioEspecialidade.belongsTo(models.Especialidades, { foreignKey: 'especialidadeId' })
    }

    return usuario_especialidade;
}

module.exports = UsuarioEspecialidade;