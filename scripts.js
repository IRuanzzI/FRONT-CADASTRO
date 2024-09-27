const loginForm = document.getElementById('formLogin'); 
const registerForm = document.getElementById('formCadastro'); 
const registerLink = document.getElementById('registerLink');
const loginLink = document.getElementById('loginLink');
const url = 'http://localhost:8080/users';


registerLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
});

loginLink.addEventListener('click', () => {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    try {
        const resposta = await fetch(`${url}/login`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });

        const resultado = await resposta.text();
        if (resposta.ok) {
            alert('Login realizado com sucesso');
            window.location.href = '/dashboard.html'; 
        } else {
            alert(resultado);
        }
    } catch (error) {
        alert('Erro ao fazer login');
    }
});


registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('name').value;
    const email = document.getElementById('emailRegister').value;
    const senha = document.getElementById('passwordRegister').value;

    try {
        const response = await fetch(`${url}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, senha })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            loginForm.style.display = 'flex';
            registerForm.style.display = 'none';
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert('Erro ao realizar cadastro.');
    }
});
