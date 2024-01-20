import api from './APIClient.js';

const loginButton = document.getElementById('loginButton');
const username = document.getElementById('username');
const password = document.getElementById('password');

loginButton.addEventListener('click', e => {
    api.logIn(username.value, password.value).then(userData => {
        window.location.href = './campuses';
    }).catch((err) => {
        alert("Invalid username or password.")
    });
});