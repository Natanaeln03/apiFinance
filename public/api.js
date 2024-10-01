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
