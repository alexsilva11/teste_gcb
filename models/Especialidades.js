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
        tableName: "especialidades",
        timestamps: true
    }
    );

    especialidades.associate = (models) => {
        especialidades.belongsToMany(models.Especialidades, {
            through: "usuario_especialidade",
            foreignKey: "especialidadeId",
            as: 'usuario'
        })
    }

    return especialidades
}

module.exports = Especialidades