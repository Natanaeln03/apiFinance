//Define a URL base da API como http://localhost/api

const API_URL = 'http://localhost:3000/api';

//funcão assincrona para fazer login do usuario
//Recebe o 'email' e 'password' como parametros

async function login(email,password) {
    try {
        //Exibe no console os dados de login que serão enviados ao servidor
    console.log('Enviando dados para login:', {email,password});

    //Envia uma requisição POST à API na rota 'auth/login'
    //A requisição inclui um cabeçalho para indicar que o conteúdo é JSON e envia o 'email' e 'password' no corpo da 

    const response = await fetch(`${API_URL}`/auth/login, {
        method: 'POST', //Define o metodo HTML como POST
        headers:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify({email,password})
    });

    //Aguarda e converte a resposta do servidor para  JSON

    const result = await response.json();

    //Exibe no console a reposta do servidor 

    console.log('Resposta do servidor para login:', result);

    //Retornar o resultando da requisição

    return result;
    }catch(error) {

        //Captura qualquer erro que ocorra durante a requisição e exibe no console

        console.error('Erro ao fazer o login:', error);

        //Retorna um objeto com 'success:false' indicando que o login falhou

        return{success:false}
    }
    
}

// Função para registrar um novo usuário
async function register(name, email, password, birth_date) {
    try {
        // Exibe no console os dados que estão sendo enviados ao servidor para registro.
        console.log('Enviando dados para registro:', { name, email, password, birth_date });

        // Envia uma requisição POST para a API no endpoint '/auth/register' com os dados do novo usuário.
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST', // Define o método HTTP como POST para enviar dados.
            headers: {
                'Content-Type': 'application/json' // Define o cabeçalho, informando que o corpo da requisição será em formato JSON.
            },
            body: JSON.stringify({ name, email, password, birth_date }) // Converte os dados do registro em uma string JSON e os envia no corpo da requisição.
        });

        // Verifica se o código de resposta HTTP está fora da faixa de 200-299 (indicando uma falha na requisição).
        if (!response.ok) {
            throw new Error('Falha na requisição. Código de status: ' + response.status); // Lança um erro com o código de status da resposta.
        }

        // Recebe a resposta do servidor como texto, uma vez que a resposta pode não estar em formato JSON.
        const result = await response.text();
        console.log('Resposta do servidor para registro:', result); // Exibe a resposta do servidor no console.

        // Retorna um objeto indicando que o registro foi bem-sucedido, juntamente com a resposta do servidor.
        return { success: true, message: result };
    } catch (error) {
        // Captura qualquer erro ocorrido durante o processo de requisição e exibe no console.
        console.error('Erro ao registrar:', error.message);

        // Retorna um objeto indicando que o registro falhou, incluindo a mensagem de erro.
        return { success: false, message: error.message };
    }

}

//Função para obter as transações

async function getTransaction() {
    //Envio uma requisição GET para a rota 'transactions' da API para obter todas as transações
    
    const response = await fetch(`${API_URL}/transactions`, {
        method: 'GET',

        headers: {
            
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    return response.json();
}