const API_URL = 'http://localhost:3000/api';

//funcão para realizar o login
 async function login(email, password) {
    const response = await fetch(`${API_URL}/auth/login`,{

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({email, password})
        });
        
        return response.json();
         
}

//funcão para resgistar um novo usuário
async function register(name, email, password, birth_date) {
    const response = await fetch(`${API_URL}/auth/resgister`,{

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({name, email, password, birth_date})
        });
        
        return response.json();
         
}

//funcão para obter todas as transaçôes
async function getALLTransactions() {
    const response = await fetch(`${API_URL}/transactions`,{

        method: 'GET',

        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` //Se precisar de autenticaçâo
        },

        body: JSON.stringify({email, password})
        });
        
        return response.json();
         
}
