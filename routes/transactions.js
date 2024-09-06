const express = require('express'); //importar a framework express
const router = express.Router(); //criar um roteador
const transactionsController = require('../controllers/transactionsController'); //Importa o controlador de transações

const authMiddleware = require('../middlewares/authMiddleware'); // Importa o middleware de autenticação 

//definir uma rota para obter todas as transações
router.get('/',  authMiddleware, transactionsController.getAllTransactions);

//definindo uma rota para todas as transações
router.post('/',  authMiddleware, transactionsController.addTransaction);

//definindo uma rota para atualizar uma trasação existente(substituição completa)
router.put('/:id',  authMiddleware, transactionsController.updateTransactionPut);

//Definindo uma rota para atualizar uma trasação existente(substituição parcial)
router.patch('/:id',  authMiddleware, transactionsController.updateTransactionPatch);

//Definindo uma rota para atualizar uma trasação existente(substituição parcial)
router.delete('/:id',  authMiddleware, transactionsController.deleteTransaction);


//exportando o roteador
module.exports = router;