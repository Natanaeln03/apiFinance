const db = require('../config/db'); //importar a conexão com o Banco de dados

//função para obter todas as transações

const getAllTransactions = (req, res) => {
    db.query('select * from transactions', (err, results) => {
        if(err){
            console.error('Erro ao obter transações:', err)
            res.status(500).send('Erro ao obter transações');
            return;
        }
        res.json(results);
    });
};

const addTransaction = (req, res) => {
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
        'INSERT INTO transactions (date, amount, description, category, account, user_id) VALUES (?,?,?,?,?,?)',
        [date, amount, description, category, account, user_id],
        (err,results) => {
            if(err) {
                console.error('erro ao adicionar transação', err);
                res.status(500).send('erro ao adicionar transação');
                return;
            }
            res.status(201).send('transação adicionar com sucesso');
        }
    );
};

//função para
const updateTransactionPut = (req, res) => {
    const {id} = req.params;
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
        'UPDATE transactions set date=?, amount=?, description=?, category=?, account=?, user_id=? WHERE id=?',
        [date, amount, description, category, account, user_id, id],
        (err, results) => {
            if(err) {
                console.error('erro ao adicionar transação', err);
                res.status(500).send('erro ao adicionar transação');
                return;
            }
            res.send('transação atualizada com sucesso')
        }
    );
};

module.exports = {
    getAllTransactions,
    addTransaction,
    updateTransactionPut
};