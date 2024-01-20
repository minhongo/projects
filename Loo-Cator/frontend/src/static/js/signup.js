import api from './APIClient.js';

const signUpForm = document.querySelector('form');
const passwordInput = document.getElementById('password');
const repeatPasswordInput = document.getElementById('repeat-password');
const errorElement = document.getElementById('error');

document.addEventListener('DOMContentLoaded', () => {
    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!checkPasswordMatch()) {
            return;
        }

        const userData = {
            email: document.getElementById('email').value,
            username: document.getElementById('username').value,
            password: passwordInput.value,
            first_name: document.getElementById('first-name').value,
            last_name: document.getElementById('last-name').value,
        };

        api.signUp(userData).then(() => {
            console.log("Successfully registered.");
            window.location.href = './login';
        }).catch(error => {
            errorElement.textContent = 'Username is already taken.';
            errorElement.style.color = 'red';
            console.error("Error signing up:", error);
        });
    });
});

function checkPasswordMatch() {
    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    if (password !== repeatPassword) {
        errorElement.textContent = "Passwords do not match.";
        errorElement.style.color = "red";
        return false;
    }

    errorElement.textContent = "";
    return true;
};