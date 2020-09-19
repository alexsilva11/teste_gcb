let Especialidades = (sequelize, DataTypes) => {
    let especialidades = sequelize.define(
        'Especialidades', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        especialidade: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: "Especialidades",
        timestamps: true
    }
    );

    especialidades.associate = (models) => {
        especialidades.belongsToMany(models.Especialidades, {
            through: "usuario_especialidade",
            foreignKey: "especialidade_id",
            as: 'usuario'
        })
    }

    return especialidades
}

module.exports = Especialidades