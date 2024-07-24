//importar a biblioteca mysql2 e criar a conexão com o banco de dados

const mysql = require('mysql2') //importar  pacote mysql2 para conectar

const db = mysql.createConnection({
    host:Process.env.DB_HOST, //endereço do servidor de Banco de Dados
    user:process.env.DB_USER, //nome de usuario para acessar o Banco de Dados
    password:process.env.DB_PASS, //senha do usuario para acessar o Banco de Dados
    database:process.env.DB_NAME //nome do Banco de Dados
})

db.connect((err) => {
    if(err){
        console.log('erro ao conectar ao Banco de Dados.', err); //exibe a mensagem de erro
    return;
}
    console.log('conectado ao Banco de Dados Mysql'); //exbe a mensagem de sucesso
});

module.exports=db; //exporta a conexão para ser usado em outros arquivos