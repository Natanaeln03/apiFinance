//importar a biblioteca mysql2 e criar a conexão com o banco de dados

const mysql = require('mysql2'); //importar  pacote mysql2 para conectar

// Exibe as variáveis de ambiente carregadas
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);
//depois pode apagar 


const db = mysql.createConnection({
    host:process.env.DB_HOST, //endereço do servidor de Banco de Dados
    user:process.env.DB_USER, //nome de usuario para acessar o Banco de Dados
    password:process.env.DB_PASS, //senha do usuario para acessar o Banco de Dados
    database:process.env.DB_NAME //nome do Banco de Dados
});

db.connect((err) => {
    if(err){
        console.error('erro ao conectar ao Banco de Dados.', err); //exibe a mensagem de erro
    return;
}
    console.log(`conectado ao Banco de Dados Mysql, ${process.env.DB_NAME}`); //exbe a mensagem de sucesso
});

module.exports=db; //exporta a conexão para ser usado em outros arquivos