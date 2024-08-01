const express = require('express'); //importar a framework express
const router = express.Router(); //criar um roteador
const transactionsController = require('../controllers/transactionsController'); //Importa o controlador de transações

//definir uma rota para obter todas as transações
router.get('/', transactionsController.getAllTransactions);

//definindo uma rota para todas as transações
router.post('/', transactionsController.addTransaction);

//definindo uma rota para atualizar uma trasação existente(substituição completa)
router.put('/:id', transactionsController.updateTransactionPut);

//Definindo uma rota para atualizar uma trasação existente(substituição parcial)
router.patch('/:id', transactionsController.updateTransactionPatch);

//Definindo uma rota para atualizar uma trasação existente(substituição parcial)
router.delete('/:id', transactionsController.deleteTransaction);


//exportando o roteador
module.exports = router;