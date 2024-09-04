
const dotenv = require('dotenv'); // Importa o pacote dotenv para gerenciar variáveis de ambiente

//configurar as variáveis de ambiente

dotenv.config(); //  Carrega as variáveis definidas no arquivo '.env' para process.env(processos)
 
//importar as bibliotecas
const express = require('express'); // Importa o framework Express
const cors = require('cors'); // Importa o pacote cors para permiƟr requisições de diferentes origens
const bodyParser = require('body-parser'); // Importa o pacote body-parser para analisar o corpo das requisições HTTP 

const db = require('./config/db'); //importar a conexão com o banco de dados

//importar as rotas de transsações e autenticação

// Importa as rotas de transações
const transactionsRoutes = require('./routes/transactions');

const authRoutes = require('./routes/auth'); // Importa as rotas de autenticação

const app = express(); // Inicializa uma nova aplicação Express 

//Configura o CORS e o body-parser

app.use(cors()); // Habilita o CORS para todas as rotas
app.use(bodyParser.json()); // Configura o body-parser para analisar requisições JSON 

// Usar as rotas de transações para todas as requisições que começam com /api/transactions
app.use('/api/transactions', transactionsRoutes); // Configura o servidor para usar as rotas de transações 

app.use('/api/auth', authRoutes); // Configura o servidor para usar as rotas de autenticação 


//Rota inicial para testar o servidor

app.get('/', (req, res) => {
    res.send(`Servidor está rodando na porta ${PORT}`); // Define uma rota inicial para testar o servidor 
});

// Configura o servidor para escutar em uma porta específica

const PORT = process.env.PORT || 3000; // Define a porta a parƟr da variável de ambiente ou usa a porta 3000 como padrão
app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`); // Escreve uma mensagem informando que o servidor está rodando
}); 