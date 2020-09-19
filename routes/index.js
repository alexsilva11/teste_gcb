var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/cadastro', indexController.cadastro)
router.post('/atualizar', indexController.atualizar)
router.post('/deletar', indexController.deletar)

router.get('/buscar', indexController.buscar)

module.exports = router;
