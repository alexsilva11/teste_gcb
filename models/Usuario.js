let Usuario = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
        'Usuario', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        crm: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: "usuario",
        timestamps: true
    }
    );

    usuario.associate = (models) => {
        usuario.belongsToMany(models.Especialidades, {
            through: "usuario_especialidade",
            foreignKey: "usuarioId",
            as: 'especialidades'
        })
    }

    return usuario
}

module.exports = Usuario