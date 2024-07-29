const express = require('express'); //importar a framework express
const router = express.Router(); //criar um roteador
const transactionsController = require('../controllers/transactionsController');

//definir uma rota para obter todas as transações
router.get('./', transactionsController.getAllTransactions);

//exportando o roteador

module.exports = router;