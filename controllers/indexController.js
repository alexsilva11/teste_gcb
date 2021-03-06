const { Op } = require('sequelize')
let { Usuario, Especialidades, UsuarioEspecialidade } = require('../models')

const indexController = {
    cadastro: async (req, res) => {
        let {
            nome,
            crm,
            telefone,
            estado,
            cidade,
            especialidades
        } = req.body

        let novoUsuario = {
            nome,
            crm,
            telefone,
            estado,
            cidade,
        }

        await Usuario.create(novoUsuario).then().catch(err => console.log(err))

        let usuarioCadastrado = await Usuario.findOne({
            where: {
                crm
            }
        });

        console.log(usuarioCadastrado)

        usuario_id = usuarioCadastrado.id

        for (especialidade of especialidades) {
            await UsuarioEspecialidade.create({
                usuario_id,
                especialidade_id: especialidade
            })
        }

        return res.json('ok')
    },

    atualizar: async (req, res) => {
        let {
            id,
            nome,
            crm,
            telefone,
            estado,
            cidade
        } = req.body

        await Usuario.update({
            nome,
            crm,
            telefone,
            estado,
            cidade,
        }, {
            where: {
                id
            }
        });

        return res.send('ok')
    },

    deletar: async (req, res) => {
        let { id } = req.body


        await Usuario.destroy({
            where: { id }
        }).then(() => console.log('apagou')
        ).catch(err => console.log(err))

        res.send('apagado para sempre')
    },

    buscar: async (req, res) => {
        let { nome } = req.query

        let resultado = await Usuario.findAll({
            where: {
                nome: { [Op.like]: `%${nome}%` }
            }, include: [{
                association: 'especialidades',
                through: {attibuttes : []}
            }]})

        return res.json(resultado)
    }
}

module.exports = indexController