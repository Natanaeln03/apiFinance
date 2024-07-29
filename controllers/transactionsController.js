const db = require('../config/db'); //importar a conexão com o Banco de dados

//função para obter todas as transações

const getAllTransactions = (req, res) => {
    db.query('select * from transactions', (err, results) => {
        if(err){
            console.error('Erro ao obter transactions', err);
            res.status(500).send('Erro ao obter transactions');
            return;
        }
        res.json(results);
    })
}


module.exports = {
    getAllTransactions
}