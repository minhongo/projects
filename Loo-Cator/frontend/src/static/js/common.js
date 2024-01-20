import api from './APIClient.js';

api.getCurrentUser().then(user => {
    // const { first_name, last_name, username } = user.user;
    // let userInfo = document.getElementById('user-info');
    // userInfo.innerHTML = `${first_name} ${last_name} (${username})`;

    // if unable to get current user --> direct to login page

}).catch(error => {
    if (error.status === 401) {
        // console.log("We are not logged in.");
        document.location = '/login';
    } else {
        console.log(`${error.status}`, error);
    }
});
