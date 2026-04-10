import { login, getSession } from '../services/authService.js';

getSession().then(session => {
    if (session) {
        // User is already logged in, redirect to dashboard
        window.location.href = 'dashboard.html';
    }
});

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const { data, error } = await login(email, password);

    if (error){
        alert('Login failed: ' + error.message);
        return;
    }

    window.location.href = 'dashboard.html';
});

document.getElementById('logout-button').addEventListener('click', async () => {
    await logout();
    window.location.href = 'index.html';
});