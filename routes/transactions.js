const express = require('express'); //importar a framework express
const router = express.Router(); //criar um roteador
const transactionsController = require('../controllers/transactionsController'); //Importa o controlador de transações

//definir uma rota para obter todas as transações
router.get('/', transactionsController.getAllTransactions);

//definindo uma rota para todas as transações
router.post('/', transactionsController.addTransaction);

//definindo uma rota
router.put('/:id', transactionsController.updateTransactionPut);

//exportando o roteador
module.exports = router;