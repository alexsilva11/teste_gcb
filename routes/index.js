var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')

router.post('/cadastro', indexController.cadastro)
router.post('/atualizar', indexController.atualizar)
router.post('/deletar', indexController.deletar)        

router.get('/buscar', indexController.buscar)

module.exports = router;
