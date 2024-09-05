const API_URL = 'http://localhost:3000/api';

document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.post(`http://localhost:3000/api/register`, {
            name,
            email,
            password
        });
        console.log('Resposta do servidor:', response);

        if (response.status === 201) {
            console.log('POST realizado com sucesso');
            alert('Cadastro realizado com sucesso!');
        }
    } catch (error) {
        console.error('Erro ao cadastrar:', error);

        // Exibe um alerta de erro
        if (error.response && error.response.data) {
            alert(`Erro: ${error.response.data.message}`);
        } else {
            alert('Erro ao cadastrar. Tente novamente.');
        }
    }
});