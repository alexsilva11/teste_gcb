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
    }
}

module.exports = indexController