import api from './APIClient.js';

const logOut = () => {
    api.logOut().then(() => {
        document.location = "/login";
    });
};

document.getElementById('logoutButton').addEventListener("click", logOut);

api.getCurrentUser().then(user => {
    const { first_name, last_name, username, email } = user;

    // populate name
    let name = document.getElementById('name');
    console.log(name);
    name.innerHTML = `Name: ${first_name} ${last_name}`;

    // populate username
    let usernamePopulate = document.getElementById('username');
    usernamePopulate.innerHTML = `Username: @${username}`;
});